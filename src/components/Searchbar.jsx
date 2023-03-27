import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

//Estilos
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '25%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: "100%", maxWidth: 'md',
    },
  }));




const Searchbar = ({type}) => {

const [searchValue, setSearchValue] = useState("");
const [inputValue, setInputValue] = useState("");

const [loading, setLoading] = useState(false);
    
const Search_btn = (value) => {

  setLoading(true)
    if (value){
        if (value.trim() !== ""){
            setInputValue(value)
            setSearchValue(value.trim())
        }
    }
    //fetch de usuario value return searchValue

  setLoading(false)
}

const Clear_btn = () => {
    
    setSearchValue("")

    setInputValue("")
    //limiar form
   
}
  
        
console.log(searchValue)

  return (
    <Box sx={{ flexGrow: 1 , width: 1}}>
      <AppBar position="relative" >
        <Toolbar sx={{ backgroundColor: "#154c79" }}>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'flex', flexDirection: "column" } }}
          >
            Buscar {type}
        
            <span style={{fontSize: "0.6em"}} >Ingrese el nombre de usuario estudiante o administrador</span>
          </Typography>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>Search_btn(event.target.value)}
              value={inputValue}
            />
          </Search>

          <Button onClick={()=>Search_btn()} variant="contained" color="primary" >Buscar</Button>
          <LoadingButton loading={loading}/>
          <Box sx={{ flexGrow: 1 }} />
          <Button  onClick={()=>Clear_btn()} variant="contained" color="secondary" size='small' >Limpiar</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Searchbar
