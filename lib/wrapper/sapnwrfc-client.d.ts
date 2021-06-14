/// <reference types="node" />
import { NodeRfcEnvironment } from "./noderfc-bindings";
declare enum EnumSncQop {
    DigSig = "1",
    DigSigEnc = "2",
    DigSigEncUserAuth = "3",
    BackendDefault = "8",
    Maximum = "9"
}
declare enum EnumTrace {
    Off = "0",
    Brief = "1",
    Verbose = "2",
    Full = "3"
}
export interface RfcConnectionParameters1 {
    saprouter?: string;
    snc_lib?: string;
    snc_myname?: string;
    snc_partnername?: string;
    snc_qop?: EnumSncQop;
    trace?: EnumTrace;
    user?: string;
    passwd?: string;
    client?: string;
    lang?: string;
    mysapsso2?: string;
    getsso2?: string;
    x509cert?: string;
    dest?: string;
    ashost?: string;
    sysnr?: string;
    gwhost?: string;
    gwserv?: string;
    group?: string;
    r3name?: string;
    sysid?: string;
    mshost?: string;
    msserv?: string;
    tpname?: string;
    program_id?: string;
}
declare type RfcConnectionParametersAllowed = "ABAP_DEBUG" | "ALIAS_USER" | "ASHOST" | "ASXML" | "CFIT" | "CLIENT" | "CODEPAGE" | "COMPRESSION_TYPE" | "DELTA" | "EXTIDDATA" | "EXTIDTYPE" | "GETSSO2" | "GROUP" | "GWHOST" | "GWSERV" | "LANG" | "LCHECK" | "LOGON_GROUP_CHECK_INTERVAL" | "MAX_REG_COUNT" | "MSHOST" | "MSSERV" | "MYSAPSSO2" | "NO_COMPRESSION" | "ON_CCE" | "PASSWD" | "PASSWORD_CHANGE_ENFORCED" | "PCS" | "PROGRAM_ID" | "PROXY_HOST" | "PROXY_PASSWD" | "PROXY_PORT" | "PROXY_USER" | "R3NAME" | "REG_COUNT" | "SAPLOGON_ID" | "SAPROUTER" | "SERIALIZATION_FORMAT" | "SERVER_NAME" | "SNC_LIB" | "SNC_MODE" | "SNC_MYNAME" | "SNC_PARTNERNAME" | "SNC_PARTNER_NAMES" | "SNC_QOP" | "SNC_SSO" | "SYSID" | "SYSNR" | "SYS_IDS" | "TLS_CLIENT_CERTIFICATE_LOGON" | "TLS_CLIENT_PSE" | "TLS_SERVER_PARTNER_AUTH" | "TLS_SERVER_PSE" | "TLS_TRUST_ALL" | "TPNAME" | "TRACE" | "USER" | "USE_REPOSITORY_ROUNDTRIP_OPTIMIZATION" | "USE_SAPGUI" | "USE_SYMBOLIC_NAMES" | "USE_TLS" | "WSHOST" | "WSPORT" | "X509CERT" | "abap_debug" | "alias_user" | "ashost" | "asxml" | "cfit" | "client" | "codepage" | "compression_type" | "delta" | "extiddata" | "extidtype" | "getsso2" | "group" | "gwhost" | "gwserv" | "lang" | "lcheck" | "logon_group_check_interval" | "max_reg_count" | "mshost" | "msserv" | "mysapsso2" | "no_compression" | "on_cce" | "passwd" | "password_change_enforced" | "pcs" | "program_id" | "proxy_host" | "proxy_passwd" | "proxy_port" | "proxy_user" | "r3name" | "reg_count" | "saplogon_id" | "saprouter" | "serialization_format" | "server_name" | "snc_lib" | "snc_mode" | "snc_myname" | "snc_partnername" | "snc_partner_names" | "snc_qop" | "snc_sso" | "sysid" | "sysnr" | "sys_ids" | "tls_client_certificate_logon" | "tls_client_pse" | "tls_server_partner_auth" | "tls_server_pse" | "tls_trust_all" | "tpname" | "trace" | "user" | "use_repository_roundtrip_optimization" | "use_sapgui" | "use_symbolic_names" | "use_tls" | "wshost" | "wsport" | "x509cert";
export declare type RfcConnectionParameters = Record<RfcConnectionParametersAllowed, string>;
declare enum RfcParameterDirection {
    RFC_IMPORT = 1,
    RFC_EXPORT = 2,
    RFC_CHANGING = 3,
    RFC_TABLES = 7
}
export interface RfcClientOptions {
    bcd?: string | Function;
    date?: Function;
    time?: Function;
    filter?: RfcParameterDirection;
}
interface RfcConnectionInfo {
    dest: string;
    host: string;
    partnerHost: string;
    sysNumber: string;
    sysId: string;
    client: string;
    user: string;
    language: string;
    trace: string;
    isoLanguage: string;
    codepage: string;
    partnerCodepage: string;
    rfcRole: string;
    type: string;
    partnerType: string;
    rel: string;
    partnerRel: string;
    kernelRel: string;
    cpicConvId: string;
    progName: string;
    partnerBytesPerChar: string;
    partnerSystemCodepage: string;
    partnerIP: string;
    partnerIPv6: string;
}
export declare type RfcVariable = string | number | Buffer;
export declare type RfcArray = Array<RfcVariable>;
export declare type RfcStructure = {
    [key: string]: RfcVariable | RfcStructure | RfcTable;
};
export declare type RfcTable = Array<RfcStructure>;
export declare type RfcParameterValue = RfcVariable | RfcArray | RfcStructure | RfcTable;
export declare type RfcObject = {
    [key: string]: RfcParameterValue;
};
export interface RfcClientBinding {
    new (connectionParameters: RfcConnectionParameters, clientOptions?: RfcClientOptions): RfcClientBinding;
    (connectionParameters: RfcConnectionParameters, options?: RfcClientOptions): RfcClientBinding;
    _id: number;
    _alive: boolean;
    _connectionHandle: number;
    _pool_id: number;
    _config: {
        connectionParameters: object;
        clientOptions?: object;
    };
    connectionInfo(): RfcConnectionInfo;
    open(callback: Function): void;
    close(callback: Function): void;
    resetServerContext(callback: Function): void;
    ping(callback: Function): void;
    invoke(rfmName: string, rfmParams: RfcObject, callback: Function, callOptions?: object): void;
    release(oneClientBinding: [RfcClientBinding], callback: Function): void;
}
export declare class Client {
    private __client;
    constructor(arg1: RfcClientBinding | RfcConnectionParameters, clientOptions?: RfcClientOptions);
    static get environment(): NodeRfcEnvironment;
    get environment(): NodeRfcEnvironment;
    get binding(): RfcClientBinding;
    get id(): number;
    get alive(): boolean;
    get connectionHandle(): number;
    get pool_id(): number;
    get config(): Object;
    get _id(): string;
    get connectionInfo(): RfcConnectionInfo;
    static checkCallbackArg(method: string, callback?: Function): void;
    connect(callback?: Function): void | Promise<Client>;
    open(callback?: Function): void | Promise<Client>;
    ping(callback?: Function): void | Promise<boolean>;
    close(callback?: Function): void | Promise<void>;
    cancel(callback?: Function): void | Promise<any>;
    resetServerContext(callback?: Function): void | Promise<void>;
    release(callback?: Function): void | Promise<void>;
    call(rfmName: string, rfmParams: RfcObject, callOptions?: RfcClientOptions): Promise<RfcObject>;
    invoke(rfmName: string, rfmParams: RfcObject, callback: Function, callOptions?: RfcClientOptions): void;
}
export {};
