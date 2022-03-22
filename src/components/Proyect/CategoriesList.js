import React from 'react'
import Cards from './Cards'

const CategoriesList = ({category}) => {
    console.log(category);
  return (



    <div>
        <h1>Categories List</h1>
        {
            category.map((cate,index) =>(
                <Cards category={cate} key={index}/>
            ))
        }

    </div>
  )
}

export default CategoriesList