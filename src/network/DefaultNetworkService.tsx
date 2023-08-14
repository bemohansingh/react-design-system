import axios from 'axios';
import { NetworkConfig } from './NetworkConfig';
import { NetworkRoute } from './NetworkRoute';
import NetworkService from './NetworkService'
import { DefaultNetworkResponse, NetworkResponse } from './NetworkResponse';
import { DefaultNetworkError } from './NetworkError';
export default class DefaultNetworkService implements NetworkService {
    config: NetworkConfig;
    constructor(config: NetworkConfig) {
        this.config = config
    }
     get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse> {
        return new Promise<NetworkResponse>((resolve, reject) => {
            const fullUrl = this.config.baseUrl + networkRoute.path;
            axios.get<T>(fullUrl)
            .then(response => {
                 resolve(new DefaultNetworkResponse<T>(response.data, "",response.status, response.statusText, networkRoute))
            })
            .catch(error => {
               reject(new DefaultNetworkError())
            });
        })
        
    }
}
