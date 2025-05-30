import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Eg = () => {
     var[val,setValue]=useState("Home");
     const setGallery = () => {
        setValue("Gallery");
     }
     const setHome = () => {
        setValue("Home");
     }
     const setContact = () => {
        setValue("Contact");
     }
  return (
    <div>
      <Typography variant='h2'>Welcome to {val}</Typography>
      <Button variant='contained' onClick={setGallery}>Gallery</Button> &nbsp;
      <Button variant='contained' color='secondary' onClick={setHome}>Home</Button> &nbsp;
      <Button variant='contained' color='error' onClick={setContact}>Contact</Button>
    </div>
  )
}

export default Eg
