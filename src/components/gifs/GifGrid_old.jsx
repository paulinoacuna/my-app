import React, { useEffect, useState } from 'react'

const GifGrid_old = ({categoria}) => {

const apiKey = "2ZXewLdwiAGZPgVkSLn3AqitEO6CeN4I"

const [images, setImages] = useState([{
    id: "",
    title: "",
    url: ""
}]);

useEffect(()=>{
    getGifs(apiKey,categoria)
},[])

const getGifs = async(apiKey,categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=2`
    const response = await fetch(url)
    const {data} = await response.json()
    console.log(data)

    const gifsArray = data.map((element)=>({
        id: element.id,
        title: element.title,
        url: element.images.downsized_medium.url
    }))
    setImages(gifsArray)
    return gifsArray
}
  return (
    <div className='gifsContainer'> 

    {
        images.map((image,i)=>{
            return <div> <img key={i} src={image.url} alt="nope" /></div>
            
        })
    }

    </div>
  )
}

export default GifGrid_old
