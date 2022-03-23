import React, { useEffect, useRef, useState } from 'react'

const CategoriesAdd = ({setCategories}) => {
    
    const [search, setSearch]= useState('')
    const searchref= useRef();

    const handleSubmit= (e) =>{
        e.preventDefault()
        setCategories(categories=>[search, ...categories])
        setSearch('')
      }

    const handleInputChange= (e) =>{
        setSearch(e.target.value)
    }

    useEffect(() => {
      searchref.current.focus()
    
      return () => {}
    }, [])
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={searchref} name= "search" placeholder="categories" value={search} onChange={handleInputChange}/>
        </form>
    </div>
  )
}

export default CategoriesAdd