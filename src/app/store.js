import { configureStore } from '@reduxjs/toolkit';

import { countryApi } from "../features/countryApi";
import { currencyApi } from '../features/currencyApi';

export default configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,  
        [currencyApi.reducerPath]: currencyApi.reducer,  
    }
});