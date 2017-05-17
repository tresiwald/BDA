export class SSH {

    private conn: any;
    private sftp: any;

    constructor() {
        this.conn = new Client();
    }

    public init = (callback: Function) => {
        this.connect((sftp: any) => {
            this.sftp = sftp;
            callback();
        });
    };

    private connect = (callback: Function, host?: string, user?: string, privateKey?: string) => {

        this.conn.on('ready', () => {
            console.log('Client :: ready');
            this.conn.sftp((err: any, sftp: any) => {
                if (err) throw err;
                callback(sftp);
            });
           
        }).connect({
            host: config.host,
            port: config.port,
            username: config.user,
            privateKey: require('fs').readFileSync(config.keyPath)
        });

    };

    public readDir = (path: string, callback: Function) => {
        this.sftp.readdir(path, (err: any, list: any) => {
            if (err) throw err;
            callback(list);
        });
    };

    public readFile = (path: string, callback: Function) => {
        this.sftp.readFile(path, (err:any, buffer:any) => {
            if(err) throw err;

            callback(buffer);
        });
    }

    private end = () => {
        this.conn.end();
    }

}