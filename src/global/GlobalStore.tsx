import {
  AnyAction,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import { BaseModule } from "../modules/BaseModule";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

var globalStores: ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]>;

export function globalStore(
  modules: BaseModule[]
): ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]> {
  var reducers: (Reducer | ReducersMapObject)[] = []
  modules.map(
    (m) => {
      const rs = m.getReducer()
      rs.map((r)=> {
        reducers.push(r)
      })
    }
  );
  var reducer: ReducersMapObject<any, any> = Object.assign({}, ...reducers);
  globalStores = configureStore({
    reducer: reducer,
  });
  return globalStores
}
export type GlobalDispatch = typeof globalStores.dispatch;
