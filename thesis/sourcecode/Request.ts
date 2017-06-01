class Request implements Processor, Mapper{
    message: Message;
    callback: Function;
    process: (message: Message) => Promise<Result>;
    map: (requestId: string, result: Result) => Promise<Message>;
...
    run = () =>{
        this.process(this.message).then((result) => {
            this.map(this.message.session, result).then((returnMessage) => {
                this.callback(returnMessage)
            }).catch(() => {
                console.log("Error mapping result")
            })
        }).catch(() => {
            console.log("Error processing result")
        })
    }
}