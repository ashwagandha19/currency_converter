import { Autocomplete, CircularProgress, Grid, TextField } from '@mui/material'
import React from 'react'
import { useGetCountriesQuery } from '../features/countryApi';
import { useGetCurrenciesQuery } from '../features/currencyApi';

const SelectCountry = (props) => {

  const { value, setValue, label } = props
  const { data:countries, isFetching } = useGetCountriesQuery();

  let params = {
    apikey: "fca_live_pQyAH2vizRCJDWh42e8xlilTK3horSoODy5yd3Qo",
    base_currency: "USD",
  }

  const { data:currency, isFetching:isFetchingCurrency, error } = useGetCurrenciesQuery(params);

  

  const filterCountries = countries?.filter(item => "currencies" in item);
  
  let filteredByApi = filterCountries?.map(country => {
    return (currency?.data?.hasOwnProperty(Object.keys(country.currencies)[0]) && country)
  })

  filteredByApi = filteredByApi?.filter(item => typeof item === 'object' && item !== null);

  let dataCountries = filteredByApi?.map(item => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
  });
  


  return (
    <>
      {isFetching ? <CircularProgress color="secondary" /> : 
          <Grid item xs={12} md={3}>
            <Autocomplete
              options={dataCountries}
              value={value}
              disableClearable
              onChange={(e, newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => (
                <TextField {...params} label={label} variant="standard" />
              )}
            /> 
          </Grid>
      }

    </>

  )
}

export default SelectCountry