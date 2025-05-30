import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[val,setValue]=useState(0);
    const inc = () => {
        setValue(++val);
    }
    const dec = () => {
        setValue(--val);
    }
  return (
    <div>
      <Typography variant='h3'>{val}</Typography>
      <Button variant='contained' color='secondary' onClick={inc}>+</Button> &nbsp;
      <Button variant='contained' color='error' onClick={dec}>-</Button> &nbsp;
    </div>
  )
}

export default Counter
