export class ACCESS_SESSION_TYPE {
    constructor(public value: string) {
    }

    toString() {
        return this.value;
    }

    static fromString(str: string) {
        switch (str) {
            case ACCESS_SESSION_TYPE.SFTP_ACCESS_SESSION.value:
                return ACCESS_SESSION_TYPE.SFTP_ACCESS_SESSION
        }
    }

    static SFTP_ACCESS_SESSION = new ACCESS_SESSION_TYPE("SFTP_ACCESS_SESSION");
}

export interface AccessSession {
    pathDescriptions: PathDescription[];
    accessSessionType: ACCESS_SESSION_TYPE;
}

export class SFTPAccessSession implements AccessSession {
    pathDescriptions: PathDescription[];
    referenceFilePath: string;
    host: string;
    privateKey: string;
    user: string;
    accessSessionType: ACCESS_SESSION_TYPE;


    constructor(pathDescriptions: PathDescription[], referenceFilePath: string, host: string, privateKey: string, user: string) {
        this.pathDescriptions = pathDescriptions;
        this.referenceFilePath = referenceFilePath;
        this.host = host;
        this.privateKey = privateKey;
        this.user = user;
        this.accessSessionType = ACCESS_SESSION_TYPE.SFTP_ACCESS_SESSION
    }
}

export class PathDescription {
    path: string;
    searchPattern: string;
    referenceFilePath: string;
...
}

