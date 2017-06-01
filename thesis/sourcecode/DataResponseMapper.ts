export class DataResponseMapper implements Mapper{
    map(requestId:string, result: DataRequestResult): Promise<DataResponseMessage> {
     ...
    }
}