import {configureStore } from'@reduxjs/toolkit';
import MedicinesReducer from './Medicines/Medicines.slice';
import AUthSliceRReducer from './auth/Auth.slice';

const Store = configureStore({
    reducer: { 
        auth: AUthSliceRReducer ,
        Medicines:MedicinesReducer,
      },
});

export default Store;