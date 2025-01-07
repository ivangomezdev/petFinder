import React from 'react'
import "./label.css"

interface Props {
    htmlFor:string;
    text:string;
}


const Label = (props:Props) => {
  return (
<label className={"label"} htmlFor={props.htmlFor} >{props.text}</label>
  )
}

export default Label
