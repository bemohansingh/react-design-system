import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { BaseModule } from "../modules/BaseModule";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
declare var globalStores: ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]>;
export declare function globalStore(modules: BaseModule[]): ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]>;
export type GlobalDispatch = typeof globalStores.dispatch;
export {};
