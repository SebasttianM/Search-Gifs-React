import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import CategoriesAdd from './CategoriesAdd';
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
    <h3>Here you'll find any kind of gif, Go ahead</h3>
    <ol>

            <CategoriesAdd setCategories={setCategories}/>

            <CategoriesList category={categories}/>
        
    </ol>
    <Button variant='warning' onClick={handleAdd}>Add</Button>
    </div>
  )}

export default CategoriesApp