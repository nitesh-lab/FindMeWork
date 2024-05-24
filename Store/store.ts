
import {configureStore} from "@reduxjs/toolkit";
import FindWorkReducer from "./findSlice";
import workSliceReducer from "./workSlice";

export const MakeStore=()=>{

    return configureStore(
        {
            reducer:{
            findWork:FindWorkReducer,
            Work:workSliceReducer
            }
        }
        )
        
    }
        export type AppStore = ReturnType<typeof MakeStore>
        export type RootState = ReturnType<AppStore['getState']>
        export type AppDispatch = AppStore["dispatch"]


