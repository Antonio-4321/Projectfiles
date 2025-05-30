import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Datafetch = () => {
    var[users,setUsers]=useState([]);
    //useEffect(()=>{},[])
    useEffect(()=>{
        //axios.get("url.").then((res)=>{}).catch()
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        })
        .catch((err) => console.log(err));
    },[])
  return (
    <div>
      <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>            
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i) => {
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                        </TableRow>
                    );                  
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  )
}

export default Datafetch
