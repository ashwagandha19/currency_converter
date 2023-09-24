import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://restcountries.com/v3.1/all',
  })

const createRequest = (url) => ({ url, headers: {}});

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery,
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => createRequest(`/`)
        }),
    })
});

export const {
    useGetCountriesQuery,
} = countryApi;