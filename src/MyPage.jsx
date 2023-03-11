import {React, useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



const MyPage = () => {
    //data quemada
    const data = [
        "One Punch"
    ]

const [categorias, setCategorias] = useState(data);

const agregarCategoria = (newCategory)=>{
    //categorias.push("Hero") 
    setCategorias([...categorias,newCategory])
}
console.log(categorias)   

  return (
    <div>
      <h2 style={{textAlign: "center", color: "teal"}}>Buscador de gifs &#128512;</h2>
        <p>Bienvenido al buscador de gifs, busca la imagen que necesites y presiona enter.</p>
        
        <AddCategory addCategory={(newCategory)=>agregarCategoria(newCategory)}/>

      <div className='container'>
        {
            categorias.map((categoria,i)=>{
                return <GifGrid categoria={categoria} key={i}/>
            })
        }
      </div>
    </div>
  )
}

export default MyPage
