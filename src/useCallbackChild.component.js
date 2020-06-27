import React,{memo,useState,useEffect} from 'react';

const UseCallBackChildComponent = ({fetchData}) => {
  console.log("UseCallBackChildComponent");
  useEffect(()=>{
    fetchData("users")
  },[fetchData])
  return (
    <div>use callback child</div>
  )
}

export default memo(UseCallBackChildComponent);