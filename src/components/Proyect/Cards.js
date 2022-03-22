
import React, { useEffect, useState } from 'react'


const Cards = () => {
    const[images, setImages]= useState([]);



    const imgGif = async() =>{
        const url= 'https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=c1hzNCgUGkGTufyb610lLgBXr0Aik8Cs'
        const resp = await fetch(url);
        const {data}= await resp.json();
        console.log(data);

        const imgData = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                image:img.images.original.url
            }
        })
        return imgData
    }

    useEffect(() => {

        imgGif().then(
            imgData=> setImages(imgData)
        )

    }, [])

    console.log(images);
  return (
    <div>
        <ol>
            {
                images.map(img=>(
                    <li key={img.id}>
                        <h3>{img.title}</h3>
                        <img src={img.image} alt="" />                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default Cards


    
