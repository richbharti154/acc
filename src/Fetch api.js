import React from 'react'
import {useState,useEffect} from 'react'
export default function FetchApi(){
  const[value,setvalue]=useState([])
  const[value1,setValue1]=useState(0)
  async function  callApi(){
    setValue1(value+1)
    const res=await fetch('https://pixabay.com/api/?key=33585985-74ef218054261ac227f678707&q=yellow+flowers&image_type=photo&pretty=true')
    const data=await res.json()
   console.log(data)
    setvalue(data.hits[value1].previewURL)
  }
  useEffect(()=>{
    callApi()
  },[])
  return(
<div>
  <img src={value}/>
<button onClick={callApi}>fetch</button>
  </div>
  )
}