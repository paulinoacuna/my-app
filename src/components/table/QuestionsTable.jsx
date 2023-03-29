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


import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getLocalUser } from '../../helpers/ManageLocalStorage';

//Styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3d0665",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//Pagination
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

//Define Data
function createData(id,question , options_1, options_2, options_3, options_4) {
  return { id, question , options_1, options_2, options_3, options_4};
}

export default function QuestionsTable({questionsArray,activeModal,activeModalDelete}) {
  

  
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const user = getLocalUser()
    if (user?.role == "admin"){
       setShow(true)
     } else if (user?.role == "student"){
       setShow(false)
     }
   
 }, []);



  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    useEffect(() => {
      const tempArray = []

      if(questionsArray.length >= 1){

        questionsArray?.map((question)=>{ 
          //TODO
            tempArray.push(createData(question.id,question.question, question.options[0].option,
                                                         question.options[1].option,
                                                         question.options[2].option,
                                                         question.options[3].option))
          
        })  
        setRows(tempArray)
        console.log(rows)
      }
      
  
    }, [questionsArray]);
  


  const editRow = (row)=> {
      //ver modal y editar campos
      activeModal({open: true,type: "editQuestion" , data: row})

  }

  const deleteRow = (row)=> {
      //ver esta seguro modal
      
      activeModalDelete({open: true,type: "deleteQuestion" , data: row})
  }

  /**
   *DELETe FIELD
   //<StyledTableCell align="right">Eliminar</StyledTableCell>


              <StyledTableCell align="right">
                  <IconButton  onClick={()=>{deleteRow(row)}} color="error" aria-label="delete">
                    <DeleteIcon  fontSize="small"/>
                  </IconButton>
              </StyledTableCell>
   */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow> 
            <StyledTableCell>Pregunta</StyledTableCell>
            <StyledTableCell align="center">Opción A</StyledTableCell>
            <StyledTableCell align="center">Opción B</StyledTableCell>
            <StyledTableCell align="center">Opción C</StyledTableCell>
            <StyledTableCell align="center">Opción D</StyledTableCell>
          {show && 
              <> 
                <StyledTableCell align="right">Editar</StyledTableCell>
                <StyledTableCell align="right">Borrar</StyledTableCell>
              </>
          }
            
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length >= 1 && 
          
          (rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row,i) => (
            <StyledTableRow className='optionRow' key={i}>
              <StyledTableCell component="th" scope="row">
                {row.question}
              </StyledTableCell>
              <StyledTableCell className='optionCell' align="center">{row.options_1}</StyledTableCell>
              <StyledTableCell className='optionCell' align="center">{row.options_2}</StyledTableCell>
              <StyledTableCell className='optionCell' align="center">{row.options_3}</StyledTableCell>
              <StyledTableCell className='optionCell' align="center">{row.options_4}</StyledTableCell>


              {show && <>
                <StyledTableCell align="right">
                  <IconButton onClick={()=>{editRow(row)}} color="info" aria-label="edit">
                      <EditIcon fontSize="small"/>
                  </IconButton>
              </StyledTableCell>

              <StyledTableCell align="right">
                  <IconButton  onClick={()=>{deleteRow(row)}} color="error" aria-label="delete">
                    <DeleteIcon  fontSize="small"/>
                  </IconButton>
              </StyledTableCell>
              </>}

            </StyledTableRow>
          ))}
             {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'filas por pagina',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}