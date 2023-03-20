import React from 'react'
import "./styles.css"

const JournalPage = () => {

  const cat = localStorage.getItem("user");

  console.log(JSON.parse(cat))

  return (
    <div className='app-container'>


    </div>
  )
}

export default JournalPage
