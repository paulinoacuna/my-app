import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#154c79",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function createData(firstName, documentNumber, email, phone, typeDocument) {
  return { firstName, documentNumber, email, phone, typeDocument};
}



export default function AppTable({usersArray}) {


    const [rows, setRows] = useState([]);
    useEffect(() => {
      const tempArray = []

      if(usersArray.length >= 1){

        usersArray?.map((user)=>{ 
            
            //procesar nombre


            tempArray.push(createData(user.firstName+" "+ user.surname, user.documentNumber, user.email, user.phone, user.typeDocument))
          
        })  
        setRows(tempArray)
        console.log(rows)
      }
      
  
    }, [usersArray]);
  
  



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Documento</StyledTableCell>
            <StyledTableCell align="center">Tipo Documento</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length >= 1 && rows.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.documentNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.typeDocument == 1 ? "C.C." :
                                              row.typeDocument == 2 ? "C.E." :
                                              row.typeDocument == 3 ? "T.I." :
                                              "--"
                                    }</StyledTableCell>

              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}