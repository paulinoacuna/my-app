import React from 'react'
import AppTable from './AppTable'
import FloatingAction from './FloatingAction'
import Searchbar from './Searchbar'

const ManageUsers = () => {






  //get users



  return (
    <div style={{width: "80%", marginLeft: "15px"}}>
      <Searchbar type="usuario"/>
      <br />
      <AppTable/>
      <FloatingAction/>
    </div>
  )
}

export default ManageUsers
