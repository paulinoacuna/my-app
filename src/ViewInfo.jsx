import React from 'react'
import "./styles.css"

const ViewInfo = ({heroe,key}) => {


  return (
    <div id={key} className='infoHeroes'> {heroe.name}  <b> {heroe.owner} </b> </div>
  )
}

export default ViewInfo
