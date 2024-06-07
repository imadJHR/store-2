"use client"

import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'



const page = () => {
  const product = () => {
    const {id} = useParams()
    const [product,setProduct] = useState([])
    const [loading , setLoading] = useState(false)

  
    useEffect (()=>{
      const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
      } 
  
    },[])
  }
  return (
    <div>
      <img src={product.image} alt=""  height={100}/>
    </div>
  )
}

export default page