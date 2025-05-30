import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Datatable = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>            
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
                </TableRow>
            </TableHead>
            
        </Table>
      </TableContainer>
    </div>
  )
}

export default Datatable

