import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ModalData_type{
    posted: string,title:string,subtitle:string,proposals:number,Price:number,_id:number
}

const init={
    ModalData:{posted: "",title: "",subtitle: "",proposals:0,Price:0,_id:-1}
}

const findWorkSlice=createSlice({
    name:"findWork",
    initialState:init,
    reducers:{
    openModal:(state,action:PayloadAction<ModalData_type>)=>{
        console.log(action.payload)
        // state.ModalData.Price=action.payload.Price;
        // state.ModalData._id=action.payload._id;
        // state.ModalData.posted=action.payload.posted;
        // state.ModalData.proposals=action.payload.proposals;

        const { posted, title, subtitle, proposals, Price, _id } = action.payload;
      return {
        ...state,
        ModalData: {
          posted,
          title,
          subtitle,
          proposals,
          Price,
          _id
        }
    }
    }
}
})

export const {openModal}=findWorkSlice.actions

export default findWorkSlice.reducer