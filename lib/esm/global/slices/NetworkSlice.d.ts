export declare enum NetworkConnectionStatus {
    connecting = 0,
    connected = 1,
    notConnected = 2
}
export declare const ConnectivitySlice: import("@reduxjs/toolkit").Slice<{
    status: NetworkConnectionStatus;
}, {}, "Connectivity">;
declare const _default: import("redux").Reducer<{
    status: NetworkConnectionStatus;
}>;
export default _default;
