import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export enum NetworkConnectionStatus {
    connecting,
    connected,
    notConnected,
  }
  
export const HomeSlice = createSlice({
  name: "Connectivity",
  initialState: {
    status: NetworkConnectionStatus.connecting,
  },
  reducers: {
    
  },
});

export default HomeSlice.reducer;

