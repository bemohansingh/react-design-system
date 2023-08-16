import {createSlice } from "@reduxjs/toolkit";
export enum NetworkConnectionStatus {
    connecting,
    connected,
    notConnected,
  }
  
export const ConnectivitySlice = createSlice({
  name: "Connectivity",
  initialState: {
    status: NetworkConnectionStatus.connecting,
  },
  reducers: {
    
  },
});

export default ConnectivitySlice.reducer;

