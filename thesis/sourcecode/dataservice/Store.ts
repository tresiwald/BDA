import {AccessSession} from "DataModel";
import * as Common from "../../Common";
export class Store {

    ...

    private tokenAccessMap: Map<string, AccessSession> = new Map();
    
    ...

    addAccessSession(accessSession: AccessSession): string {
        const uuid = Common.generateRandomUuid();
        this.tokenAccessMap.set(uuid, accessSession);
        return uuid;
    }

    getAccessSession(token: string): AccessSession {
        const accessSession = this.tokenAccessMap.get(token);
        this.tokenAccessMap.delete(token);
        return accessSession;
    }

}