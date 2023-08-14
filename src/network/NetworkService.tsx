import { NetworkConfig } from "./NetworkConfig";
import { NetworkError } from "./NetworkError";
import { NetworkResponse } from "./NetworkResponse";
import { NetworkRoute } from "./NetworkRoute";

export default interface NetworkService {
    config: NetworkConfig
    get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse>;
}