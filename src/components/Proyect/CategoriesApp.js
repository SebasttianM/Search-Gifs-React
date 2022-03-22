import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import CategoriesList from './CategoriesList';

const CategoriesApp = () => {

    const[categories, setCategories]= useState(['Funny']);


    const handleAdd=()=>{
        
        // let aux= categories     otra manera de agregar 
        // aux.push('hola')
        // setCategories(aux)


        setCategories(
            [...categories, 'Comedy']
        )
    }
  return (
    <div>
    <h1>Components with Hooks</h1>
    <ol>
        {
            // categories.map((cate, index)=>(

            //     <li key={index}>
            //         {cate}
            //     </li>
            // ))
            <CategoriesList category={categories}/>
        }
    </ol>
    <Button variant='warning' onClick={handleAdd}>Add</Button>
    </div>
  )}

export default CategoriesApp