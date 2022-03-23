
import React, { useEffect, useState } from 'react'


const Cards = ({category}) => {
    const[images, setImages]= useState([]);

    useEffect(() => {

        imgGif(category).then(
            imgData=> setImages(imgData)
        )

    }, [category])


    const imgGif = async(category) =>{
        const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=50&api_key=c1hzNCgUGkGTufyb610lLgBXr0Aik8Cs`
        const resp = await fetch(url);
        const {data}= await resp.json();
        console.log(data);

        const imgData = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                image:img.images?.original.url
            }
        })
        return imgData
    }


    imgGif();

   
  return (
    <div>
        <ol>
            {
                images.map(img=>(
                    <li key={img.id}>
                        <h7>{img.title}</h7>
                        <img src={img.image} alt="imagen" />                    
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default Cards


    
