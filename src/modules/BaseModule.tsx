import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ComponentType } from "react";

export interface BaseModule {
    key: string,
    entryPath: string,
    route: ComponentType,
    getReducer(): (Reducer | ReducersMapObject)[]
}