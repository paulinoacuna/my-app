import React, { useEffect, useState } from 'react'

const Giphy = () => {

/* RESOLVER PETICIONES | OLD solo JS
res.then((res)=>{
    
    res.json().then(({data})=>{
        const {url} = data.images.original
        const img = document.createElement("img") //crear elemento HTML tipo <img/>

        img.src = url  //acceder a atributo "src" de <img src=""/>

        document.body.append(img) //insertar <img src="url"/> en el DOM visual
    })
    }
)
*/

//RESOLVER PETICIONES | NEW solo JS
/*

const getImagenes = async ()=>{

try {
    const apiKey = "2ZXewLdwiAGZPgVkSLn3AqitEO6CeN4I"
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=r`) //retorna una promesa
    const {data} = await res.json()
    
    const {url} = data.images.original
    const img = document.createElement("img")
    img.src = url
    document.body.append(img)
} catch (error) {
    console.log(error)
}}
getImagenes()
*/
const [image, setImage] = useState("");

const getImagenes = async ()=>{

    try {
        const apiKey = "2ZXewLdwiAGZPgVkSLn3AqitEO6CeN4I"
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=r`) //retorna una promesa
        const {data} = await res.json()
        
        const {url} = data.images.original
        setImage(url)
        console.log("ejecutado")
        
    } catch (error) {
        console.log(error)
    }
    
}

useEffect(()=>{
    getImagenes()
    console.log("hola mundo")
},[])


return(
<>
    <img src={image} alt="imagen" />
</>
)


}
export default Giphy
