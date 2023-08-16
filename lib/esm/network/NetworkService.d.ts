import { NetworkConfig } from "./NetworkConfig";
import { NetworkResponse } from "./NetworkResponse";
import { NetworkRoute } from "./NetworkRoute";
export interface NetworkService {
    config: NetworkConfig;
    get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    put<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    post<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    delete<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
    patch<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>>;
}
