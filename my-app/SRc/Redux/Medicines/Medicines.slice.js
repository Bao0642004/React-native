import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../../../Data.smaple";

const INIT_STATE ={
    list:SAMPLE_DATA,
    detall:null,
    Setsanpham:[],
    Hoadon:[],
}
const MedicinesSlice = createSlice({
    name: "medicines",
    initialState:INIT_STATE,
    reducers: {
        Themgiohang:(state,action)=>{
            const  {payload} = action;
            state.list.push(payload);
        },
        Setdetall:(state,action)=>{
            const  {payload} = action;
            state.detall=payload;
        },
        Themsanpham:(state,action)=>{
            const {payload} = action; 
            let cothethem=true;
            //bên trong gh có sp chưa nê ko thi có thì cộng
            for( let j=0; j< state.Setsanpham.length; j++) {
                if(state.Setsanpham[j].id === payload.id){
                    state.Setsanpham[j].Soluong = state.Setsanpham[j].Soluong + 1;
                    cothethem=false;
                }
            }     
            if (cothethem== true){
                for( let i=0; i< state.list.length; i++) {   
                    
                    if(state.list[i].id === payload.id){                              
                        const ketqua =  {...state.list[i],Soluong:1}
                        state.Setsanpham.unshift(ketqua);
                    } 
                   
                }
            }
           
        },
       
        Giamsoluong:(state,action)=>{
            const {payload} = action;
              for(let i=0; i< state.Setsanpham.length; i++) {
                if(state.Setsanpham[i].id === payload.id){
                    state.Setsanpham[i].Soluong = state.Setsanpham[i].Soluong-1;
                } 
            }
        
        },
        Tangsoluong:(state,action)=>{
            const {payload} = action;
            for(let i=0; i< state.Setsanpham.length; i++) {
                if(state.Setsanpham[i].id === payload.id){
                    state.Setsanpham[i].Soluong = state.Setsanpham[i].Soluong+1;
                } 
            }
        },
       
      
        Themhoadon:(state,action)=>{     
           const B = {
              Sanpham: [...state.Setsanpham],
              id: state.Setsanpham.length+1,
              ngaygio: {
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),              
              },
           };
           state.Hoadon.push(B);
           state.Setsanpham=[];
            
            
        },
    },
});
export const { 
    Themgiohang,
    Setdetall,
    Themsanpham,
    Giamsoluong,
    Tangsoluong,
    Thanhtoanpham,
    Themhoadon,
   
 } = MedicinesSlice.actions;
export default MedicinesSlice.reducer;