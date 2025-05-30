import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Dataform = () => {
    var[input,setInput]=useState({});
    const inputHandler = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
  return (
    <div>
      <TextField variant='outlined' label='Username' onChange={inputHandler} name='username'></TextField><br /><br />
      <TextField variant='outlined' label='Password' onChange={inputHandler} name='password'></TextField><br /><br />
      <Button variant='contained'>LOGIN</Button>
    </div>
  )
}

export default Dataform
