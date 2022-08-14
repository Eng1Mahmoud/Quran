import React from 'react'
import { useSelector } from 'react-redux'
function Name() {
    const name  = useSelector((state)=> state.name)
    console.log(name)
  return (
    <div>
       {/*  {name.map((e,i)=>{
          return(  <div key={i}>{e.prepared_by[0].title}</div>)
        })} */}
    </div>
  )
}

export default Name