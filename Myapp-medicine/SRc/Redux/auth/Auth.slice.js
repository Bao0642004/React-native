import { createSlice } from '@reduxjs/toolkit';
import { loginthunk } from './Auth.thunk';

const INIT_STATE = {
    token:null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INIT_STATE,
    reducers:{    },
    extraReducers:builder =>{
        builder
        .addCase(loginthunk.fulfilled, (state,action) => {
                    const {payload} = action;
                       state.token = payload; 

        });    
    }
});

export default authSlice.reducer;