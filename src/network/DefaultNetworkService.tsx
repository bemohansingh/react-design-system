import axios from "axios";
import { NetworkConfig } from "./NetworkConfig";
import { NetworkRoute } from "./NetworkRoute";
import { DefaultNetworkResponse, NetworkResponse } from "./NetworkResponse";
import { DefaultNetworkError } from "./NetworkError";
import { NetworkService } from "./NetworkService";
export  class DefaultNetworkService implements NetworkService {
  config: NetworkConfig;
  constructor(config: NetworkConfig) {
    this.config = config;
  }

  get<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return new Promise<NetworkResponse>((resolve, reject) => {
      const fullUrl = this.config.baseUrl + networkRoute.path;
      axios
        .get<T>(fullUrl, {params: networkRoute.queryParams})
        .then((response) => {
          resolve(
            new DefaultNetworkResponse<T>(
              response.data,
              "",
              response.status,
              response.statusText,
              networkRoute
            )
          );
        })
        .catch((error) => {
          console.log(error)
          reject(new DefaultNetworkError());
        });
    });
  }
  put<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return new Promise<NetworkResponse>((resolve, reject) => {
      const fullUrl = this.config.baseUrl + networkRoute.path;
      axios
        .put<T>(fullUrl, networkRoute.bodyParams, {params: networkRoute.queryParams})
        .then((response) => {
          resolve(
            new DefaultNetworkResponse<T>(
              response.data,
              "",
              response.status,
              response.statusText,
              networkRoute
            )
          );
        })
        .catch((error) => {
          console.log(error)

          reject(new DefaultNetworkError());
        });
    });
  }
  post<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return new Promise<NetworkResponse>((resolve, reject) => {
      const fullUrl = this.config.baseUrl + networkRoute.path;
      axios
        .post<T>(fullUrl, networkRoute.bodyParams, {params: networkRoute.queryParams})
        .then((response) => {
          resolve(
            new DefaultNetworkResponse<T>(
              response.data,
              "",
              response.status,
              response.statusText,
              networkRoute
            )
          );
        })
        .catch((error) => {
          console.log(error)

          reject(new DefaultNetworkError());
        });
    });
  }
  delete<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return new Promise<NetworkResponse>((resolve, reject) => {
      const fullUrl = this.config.baseUrl + networkRoute.path;
      axios
        .delete<T>(fullUrl, {params: networkRoute.queryParams})
        .then((response) => {
          resolve(
            new DefaultNetworkResponse<T>(
              response.data,
              "",
              response.status,
              response.statusText,
              networkRoute
            )
          );
        })
        .catch((error) => {
          console.log(error)

          reject(new DefaultNetworkError());
        });
    });
  }
  patch<T>(networkRoute: NetworkRoute): Promise<NetworkResponse<T>> {
    return new Promise<NetworkResponse>((resolve, reject) => {
      const fullUrl = this.config.baseUrl + networkRoute.path;
      axios
        .patch<T>(fullUrl, networkRoute.bodyParams, {params: networkRoute.queryParams})
        .then((response) => {
          resolve(
            new DefaultNetworkResponse<T>(
              response.data,
              "",
              response.status,
              response.statusText,
              networkRoute
            )
          );
        })
        .catch((error) => {
          console.log(error)

          reject(new DefaultNetworkError());
        });
    });
  }
}
