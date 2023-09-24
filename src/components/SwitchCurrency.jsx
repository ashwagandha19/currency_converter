import { Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import { CurrencyContext } from '../context/context'

const SwitchCurrency = () => {

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  } = useContext(CurrencyContext)

  const handleSwitch = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <Grid item md sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
      <Button onClick={handleSwitch}>
        <CompareArrowsIcon/>
      </Button>
    </Grid>
  )
}

export default SwitchCurrency