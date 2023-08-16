import { NetworkConfig } from "./NetworkConfig";
import { NetworkRoute } from "./NetworkRoute";
import { NetworkResponse } from "./NetworkResponse";
import { NetworkService } from "./NetworkService";
export declare class Network implements NetworkService {
    config: NetworkConfig;
    private service;
    private static instance;
    private constructor();
    static getInstance(): Network;
    static fromConfig(config: NetworkConfig): Network;
    static fromService(service: NetworkService): Network;
    get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    put<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    post<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    delete<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    patch<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
}
