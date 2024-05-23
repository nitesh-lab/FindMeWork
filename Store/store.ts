
import {configureStore} from "@reduxjs/toolkit";
import FindWorkReducer from "./findSlice";


export const MakeStore=()=>{

    return configureStore(
        {
            reducer:{
            findWork:FindWorkReducer,
            }
        }
        )
        
    }
        export type AppStore = ReturnType<typeof MakeStore>
        export type RootState = ReturnType<AppStore['getState']>
        export type AppDispatch = AppStore["dispatch"]


