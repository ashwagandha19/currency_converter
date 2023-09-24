import { Grid, InputAdornment, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { CurrencyContext } from '../context/context'

const FromInput = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext)

  return (
    <Grid item xs={12} md={3}>
        <TextField
            value={firstAmount}
            onChange={e => setFirstAmount(e.target.value)}
            label="Amount"
            fullWidth
            InputProps={{
                type:"Number",
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
        />
    </Grid>
  )
}

export default FromInput