import React from 'react'
import {useState} from 'react'
export default function Accordion(){
  const[answer,setAnswer]=useState(false)
  return(
    <div>
      <div onClick={()=>setAnswer(!answer)}>
      <div>what are features of react</div>
      <button>{answer? '-':'+'}</button>
      </div>
      {answer && <div>(var. jhgd bshhsfscsc sbsshsgsc)</div>}
    </div>
  )
}