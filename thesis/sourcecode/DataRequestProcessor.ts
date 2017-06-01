export class DataRequestProcessor implements Processor{
    process(message: DataRequestMessage): Promise<DataRequestResult> {
        ...
    }
}