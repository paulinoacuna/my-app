import React, { useState } from 'react'
import ViewInfo from './ViewInfo'
import PropTypes from "prop-types"

import {heroes} from './heroes'


const HelloWorld = ({title})=>{

    //example getter
    const getHeroes = (id)=>{
        return heroes.find((heroe)=>heroe.id === id)
    }

    //ejemplo promesas
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("")
            resolve()
        }, 2000);
    }).then(()=>{
        console.log("")
    })
    return (
     <div>
        {
            heroes.map((heroe,i)=>(
                heroe && <ViewInfo key={i} heroe={heroe}/>
            ))
        }
     </div>

    )

    //todo el form enviará por post esto: /?nombre=pacuna&documento=1010063372>
}


HelloWorld.propTypes = {
    title:PropTypes.string.isRequired
}

export default HelloWorld