import React, { useState }  from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from "react-router-dom"




const AppCard = ({cardName,cardUrl,cardLabel}) => {
  const navigate = useNavigate();


  const navigateTo = (cardUrl)=>{
    if (cardUrl) navigate(cardUrl)
    
  }

  return (
    <Card  sx={{ maxWidth: 250,  m: 1, height: 300}}>
          <CardMedia
        sx={{ height: 100 }}
        image="https://placekitten.com/250/100"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {cardLabel}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigateTo(cardUrl)}> Ingresar </Button>
       
      </CardActions>
    </Card>
  )
}

export default AppCard
