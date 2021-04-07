import React,{useState} from 'react';
import WithBgColor from './hoc/withBgcolor';

const BGColor = (props) => {
  console.log("bg color component", props)
  return (
    <div>
      bg color component
    </div>
  )
}

const BorderColor = (props) => {
  console.log("sds")
  return (
    <div>
      border color component
      {props.children}
    </div>
  )
}
export default WithBgColor(BGColor,BorderColor);