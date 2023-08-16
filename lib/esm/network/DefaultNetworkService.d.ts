import { NetworkConfig } from "./NetworkConfig";
import { NetworkRoute } from "./NetworkRoute";
import { NetworkResponse } from "./NetworkResponse";
import { NetworkService } from "./NetworkService";
export declare class DefaultNetworkService implements NetworkService {
    config: NetworkConfig;
    constructor(config: NetworkConfig);
    get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    put<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    post<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    delete<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    patch<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
}
