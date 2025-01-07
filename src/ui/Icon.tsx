import React from 'react'
import "./icon.css"
const Icon = (icon:any) => {

    
  return (
    <img className={"icon__ui"} src={icon.icon.image}/>
  )
}

export default Icon
