import { NetworkRoute } from "./NetworkRoute";
export interface NetworkResponse<T = any> {
    data: T;
    statusCode: number;
    message: string;
    request?: NetworkRoute;
}
export declare class DefaultNetworkResponse<T> implements NetworkResponse<T> {
    data: T;
    rawData: any;
    statusCode: number;
    message: string;
    request?: NetworkRoute | undefined;
    constructor(data: T, rawData: any, statusCode: number, message: string, request?: NetworkRoute | undefined);
}
