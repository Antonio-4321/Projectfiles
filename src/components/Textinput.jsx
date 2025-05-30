import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Textinput = () => {
    var[data,setData]=useState();
    var[out,setOutput]=useState();
    const getName = (e) => {
        console.log(e.target.value);
        setData(e.target.value);
    }
    const setName = () => {
        setOutput(data);
    }
  return (
    <div>
      <Typography variant='h2'>Welcome {out}</Typography>
      <br /><br />
      <TextField variant='standard' color='white' background-color='white' label='Name' onChange={getName}></TextField>
      <br /><br />
      <Button variant='contained' onClick={setName}>CHANGE</Button>
    </div>
  )
}

export default Textinput
