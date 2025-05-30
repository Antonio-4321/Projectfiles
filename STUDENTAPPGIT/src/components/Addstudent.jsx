
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Addstudent = (props) => {
  var[inputs,setInputs]=useState({Name:"",Place:"",Age:"",Department:""});
  var location = useLocation();
  var navigate = useNavigate();
    const inputHandler = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    }
    console.log("state :",location.state);
    useEffect(() => {
      if(location.state!==null){
        setInputs({
          ...inputs,
          Name:location.state.val.Name,
          Place:location.state.val.Place,
          Age:location.state.val.Age,
          Department:location.state.val.Department,
        });
      }
    },[]);
    const submitHandler = () => {
      console.log("Submitted");
    if (location.state !== null) {
      var id = location.state.val._id;
      axios
        .put(`http://localhost:3000/${id}`, inputs)
        .then((res) => {
          alert(res.data);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3000/", inputs)
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    }
  return (
    <div>
      <TextField variant='outlined' label='Name' onChange={inputHandler} name='Name' value={inputs.Name}></TextField><br /><br />
      <TextField variant='outlined' label='Place' onChange={inputHandler} name='Place' value={inputs.Place}></TextField><br /><br />
      <TextField variant='outlined' label='Age' onChange={inputHandler} name='Age' value={inputs.Age}></TextField><br /><br />
      <TextField variant='outlined' label='Department' onChange={inputHandler} name='Department' value={inputs.Department}></TextField><br /><br />
      <Button variant='contained' onClick={submitHandler}>SUBMIT</Button>
    </div>
  )
}

export default Addstudent
