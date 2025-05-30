import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Viewstudent = () => {
    const [students,setStudents] = useState([]);
    var navigate = useNavigate();
    var location = useLocation();
    useEffect(() => {
      axios.get('http://localhost:3000/view')
      .then((res) => {
        console.log(res.data)
        setStudents(res.data);
      })
      .catch((err) => console.log(err))
    },[])
    const delStu = (id) => {
      console.log(id);
      axios
      .delete(`http://localhost:3000/${id}`)
      .then((res) => {
        console.log(res);
        alert(res.data)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
    }
    const updStu = (val) => {
              console.log(val);
              navigate('/add',{state:{val}});
    }
  return (
    <div>
      <Typography variant='h2'>Welcome to Student portal</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>            
                <TableCell>Place</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Department</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {students.map((val,i) => {
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.Name}</TableCell>
                            <TableCell>{val.Place}</TableCell>
                            <TableCell>{val.Age}</TableCell>
                            <TableCell>{val.Department}</TableCell>
                            <TableCell>
                              <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        delStu(val._id);
                      }}
                    >
                      Delete
                    </Button>&nbsp;&nbsp;
                            </TableCell>
                            <TableCell>
                              <Button variant='contained' color='success' onClick={() =>{
                                updStu(val);
                              }}>UPDATE</Button>
                            </TableCell>
                        </TableRow>
                    );                  
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Viewstudent
