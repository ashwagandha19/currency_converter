
import { Alert, Box, Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import './App.css';
import FromInput from './components/FromInput';
import SelectCountry from './components/SelectCountry';
import SwitchCurrency from './components/SwitchCurrency';
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from './context/context';
import { useGetCurrenciesQuery } from './features/currencyApi';

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  } = useContext(CurrencyContext)

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  let params = {
    apikey: process.env.REACT_APP_API_KEY,
    base_currency: codeFromCurrency,
    currencies: codeToCurrency
  }

  const { data:currency, isFetching, error } = useGetCurrenciesQuery(params);

  useEffect(() => {
    if(!isFetching) {
      setResultCurrency(currency?.data[codeToCurrency])
    }
  }, [isFetching])

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter',
      ].join(','),
    },
  });
   

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{background: "#f5f5f5", mt:5, borderRadius:5, py:5}}>
      <Typography variant="h3" sx={{textAlign:'center', mb:5}}>Currency Converter</Typography>
      <Grid container spacing={2}>
          <FromInput/>
          <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
          <SwitchCurrency />
          <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
      </Grid>
      {(firstAmount) && (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', py:5}}>
            <Typography>{firstAmount} {fromCurrency}</Typography>  = 
            <Typography>{resultCurrency*firstAmount} {toCurrency}</Typography>
        </Box>
      )}
      {error &&  <Alert sx={{textAlign:'center'}} severity="warning">Cannot find currency for this country</Alert>}
    </Container>
    </ThemeProvider>
  );
}

export default App;
