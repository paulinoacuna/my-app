import React, { useEffect, useState } from 'react'
import { getGifts } from '../../helpers/getGifts'
import GifGridItem from './GifGridItem';

const GifGrid = ({categoria}) => {
  console.log("mis categorias")
  console.log(categoria)

const [images, setImages] = useState();

const getImages = async ()=>{
  const newImages = await getGifts(categoria)
  setImages(newImages)
}

useEffect(()=>{
  getImages()
},[])
console.log(images)

  return (
    <>
      <h4>{`Gifs de ${categoria}`}</h4>
    <div className='gifGrid'>
    {images && images.map((element,i)=>(
      <GifGridItem key={i} {...element}/>
    ))}
   </div>
   </>
  )
}

export default GifGrid
