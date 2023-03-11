import React from 'react'

const GifGridItem = ({id,title,url}) => {
  return (

<div className="card">
    <img src={url} alt="gif" />
    <p>{title}</p>
</div>
  )
}

export default GifGridItem
