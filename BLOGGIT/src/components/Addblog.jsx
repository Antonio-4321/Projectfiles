
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

const Addblog = () => {
    var[inputs,setInputs]=useState({});
const inputHandler = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
}
  return (
    <div>
      <TextField variant='outlined' label='Name' onChange={inputHandler} name='BLOG NAME'></TextField><br /><br />
      <TextField variant='outlined' label='Place' onChange={inputHandler} name='DESCRIPTION' ></TextField><br /><br />
      <TextField variant='outlined' label='Age' onChange={inputHandler} name='AUTHOR NAME' ></TextField><br /><br />
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Addblog
