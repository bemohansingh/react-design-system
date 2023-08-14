import { NetworkRoute } from "./NetworkRoute";

export interface NetworkResponse<T = any> {
    data: T;
    statusCode: number;
    message: string;
    request?: NetworkRoute;
  }
  
  export class DefaultNetworkResponse<T> implements NetworkResponse<T> {
    data: T;
    rawData: any;
    statusCode: number;
    message: string;
    request?: NetworkRoute | undefined;

    constructor(data: T,rawData: any, statusCode: number, message: string, request?: NetworkRoute | undefined) {
      this.data = data;
      this.statusCode = statusCode;
      this.message = message;
      this.request = request;
      this.rawData = rawData;
    }
    
  }