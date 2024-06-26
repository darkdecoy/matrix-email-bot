import * as config from "config";

export interface IRoomConfig {
    allowFromAnyone: boolean;
    allowedSenders: string[];
    blockedSenders: string[];
    skipDatabase: boolean;
    useCcAsTarget: boolean;
    useBccAsTarget: boolean;
    useToAsTarget: boolean;
    plaintextOnly: boolean;
    attachments: {
        post: boolean;
        allowAllTypes: boolean;
        contentMapping: Map<string, string>; // mime to msgtype
        allowedTypes: string[];
        blockedTypes: string[];
    };
    postReplies: boolean;
    postEmpty: boolean;
    messageFormat: string;
    fragmentFormat: string;
    messagePlainFormat: string;
    fragmentPlainFormat: string;
    antispam: {
        maxScore: number;
        blockFailedDkim: boolean;
        blockFailedSpf: boolean;
    };
}

interface IConfig {
    matrix: {
        homeserverUrl: string;
        accessToken: string;
        storagePath: string;
        messageTries: number;
        failedWaitTime: number;
        burst: {
            messageThreshold: number;
            length: number;
            waitTime: number;
        }
    };
    mail: {
        enabled: boolean;
        port: number;
        domain: string;
        logLevel: string;
    };
    web: {
        port: number;
        bindIp: string;
        secret: string;
    };
    customMailTargets: Map<string, string[]>; // emails to room IDs
    defaultRoomConfig: IRoomConfig;
    roomConfigs: Map<string, IRoomConfig>; // room ID to config
}

export default <IConfig>config;
