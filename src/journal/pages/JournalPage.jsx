import React from 'react'

const JournalPage = () => {

  const cat = localStorage.getItem("user");

  console.log(JSON.parse(cat))

  return (
    <>

    </>
  )
}

export default JournalPage
