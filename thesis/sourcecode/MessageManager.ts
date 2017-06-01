...
let request = mixInProcessor(message, callback);
request.run()
...
const mixInProcessor = (message: Message, callback: Function):Request => {
    switch (message.type.value) {
        case MessageType.DATA_REQUEST.value:
            Mixin.applyMixins(Request, [DataRequestProcessor, DataResponseMapper]);
            return new Request(message, callback);
        ...
    }
}
...
const applyMixins = (derivedCtor: any, baseCtors: any[]): any => {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
...
