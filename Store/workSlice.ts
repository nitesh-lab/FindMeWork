import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const init={
    service:"",
}

const WorkSlice=createSlice({
    name:"work",
    initialState:init,
    reducers:{
        SelectService:(state,action:PayloadAction<string>)=>{
            console.log("coming store")
           return {...state,service:action.payload}
        }
    }
})

export const {SelectService}=WorkSlice.actions
export default WorkSlice.reducer