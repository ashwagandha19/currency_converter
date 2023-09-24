import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://api.freecurrencyapi.com/v1/latest',
  })

const createRequest = (url, params) => ({ url, params: params});

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery,
    endpoints: (builder) => ({
        getCurrencies: builder.query({
            query: (params) => createRequest(`/`, params)
        }),
    })
});

export const {
    useGetCurrenciesQuery,
} = currencyApi;