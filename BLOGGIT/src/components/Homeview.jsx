import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Homeview = () => {
     var[users,setUsers]=useState([]);
    //useEffect(()=>{},[])
    useEffect(()=>{
        //axios.get("url.").then((res)=>{}).catch()
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
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
                <TableCell>Blog Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Author Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i) => {
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.body}</TableCell>
                            <TableCell>{val.id}</TableCell>
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

export default Homeview
