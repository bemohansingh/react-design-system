import { NetworkConfig } from "./NetworkConfig";
import {DefaultNetworkService} from "./DefaultNetworkService";
import { NetworkRoute } from "./NetworkRoute";
import { NetworkResponse } from "./NetworkResponse";
import { NetworkService } from "./NetworkService";

export class Network implements NetworkService {
  config: NetworkConfig;
  private service: NetworkService;
  private static instance: Network;

  private constructor(service: NetworkService) {
    this.config = service.config;
    this.service = service;
  }

  public static getInstance(): Network {
    return Network.instance;
  }

  static fromConfig(config: NetworkConfig): Network {
    const service = new DefaultNetworkService(config);
    const instance = new Network(service);
    if (!Network.instance) {
      Network.instance = instance;
    }
    return instance;
  }

  static fromService(service: NetworkService): Network {
    const instance = new Network(service);
    if (!Network.instance) {
      Network.instance = instance;
    }
    return instance;
  }

  get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return this.service.get<T>(networkRoute);
  }
  put<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return this.service.put<T>(networkRoute);
  }
  post<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return this.service.post<T>(networkRoute);
  }
  delete<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return this.service.delete<T>(networkRoute);
  }
  patch<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return this.service.patch<T>(networkRoute);
  }
}
