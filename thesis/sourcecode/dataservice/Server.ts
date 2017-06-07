import {Message} from "DataModel";
import * as safeBuffer from "safe-buffer";
import * as MessageManager from "./processor/MessageManager";
import SocketStore from "./common/SocketStore";
const fs = require('fs');
const Buffer = safeBuffer.Buffer;
const BufferStream = require('stream');
const port = 8080;
const Promise = require("bluebird");
const allowedOrigins = "https://localhost:8888  http://localhost:8888 *://*:*";
const path = require('path');
const ss = require('socket.io-stream');
const msgpack = require("msgpack-lite");



export class Server {
    io: any;

    constructor() {
        this.startServer();
        console.log("Servers up and running.");
    }

    startServer = () => {
        const server = require('http').createServer()
        this.io = require('socket.io').listen(server);
        server.listen(PORT);
        this.waitForConnection();
    };

    waitForConnection = () => {
        this.io.on('connection', (socket: any) => {
            ss(socket).on('route', (stream: any) => {
                this.processRequest(stream, socket);
            });
        });
    };

    processRequest = (stream: any, ws: WebSocket) => {
        StreamingHelper.streamToData(stream, 
        (data: any) => {
            this.processPayload(stream, data, ws);
        });
    };

    processPayload = (stream:any, message: Message,
        ws: WebSocket) => {
        MessageManager.handleMessage(message, this.prepareMessage, ws)
    };

    prepareMessage = (message: Message, 
    ws: WebSocket) => {
        this.sendMessage(
            StreamingHelper.getLargeStream(message), ws, 
            () => {// callback})
    }

    sendMessage = (stream: any, ws: WebSocket, callback: Function) => {
        ss(ws).emit('route', stream);
        callback();
    };

}

module StreamingHelper {
    export const getLargeStream = (msg: Message): any => {
        const stream = ss.createStream();
        const arrayBuffer = msgpack.encode(msg);
        const bufferStream = new BufferStream.PassThrough();
        
        for(var i = 0; i<arrayBuffer.length; i = i + 1000000){
            if((i + 1000000) < arrayBuffer.length){
                console.log("Put", i, (i+1000000))
                bufferStream.write(arrayBuffer.slice(i, i+ 1000000))
            }else{
                bufferStream.write(arrayBuffer.slice(i, i+ arrayBuffer.length))
            }
        }
        
        bufferStream.end();
        bufferStream.pipe(stream);
        return stream;
    };

    export const streamToData = (stream: any, callback: Function) => {
        let bufs: any[] = [];
        stream.on("data", (chunk: any) => {
            bufs.push(chunk);
        }).on("end", () => {
            const buf = Buffer.concat(bufs);
            const msg = msgpack.decode(buf);
            callback(msg);
        });
    };
}
