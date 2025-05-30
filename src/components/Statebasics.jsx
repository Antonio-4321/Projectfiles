import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Statebasics = () => {
    //var name="Antonio";
    var[name,setName]=useState("Antonio");
    const nameChange = () => {
        setName("Eren")
    }
  return (
    <div>
      <Typography variant='h1'>Welcome {name}</Typography>
      <Button variant='contained' onClick={nameChange}>CHANGE</Button>
      <br /><br />
      <Button variant='contained' onClick={() =>{setName("Mikasa")}}>CHANGE1</Button>

    </div>
  )
}

export default Statebasics
