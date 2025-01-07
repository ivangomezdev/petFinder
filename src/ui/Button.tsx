import React from 'react'
import "./button.css"


type ButtonProps = {
    text: string;
    color?: string;
    clickHandler?: EventListener;
  };

  
const Button = (props:ButtonProps) => {
  return (
    
      <button style={{backgroundColor:`${props.color}`}} onClick={props.clickHandler}  className={"button"}>{props.text}</button>
 
  )
}

export default Button
