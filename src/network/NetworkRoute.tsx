export interface NetworkRoute {
    path: string,
    queryParams?: Map<string, any>
    bodyParams?: Map<string, any>
    formDataParams?: Map<string, any>
    headers?: Map<string, any>
}