import React,{useState,useEffect,useCallback} from 'react';
import UseCallBackChildComponent from './useCallbackChild.component';

const UseCallBackComponent = () => {
  /*THE FUNCTIONS DEFINED INSIDE OF THE COMPONENT
  FUNCTION ARE CREATED AGAIN WHEN APP RE-RENDERS
  TO OVERCOME THIS USE useCallback
  */
  const fetchData = useCallback((type)=>{
    return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res=>res.json())
    .then(json=>console.log(json));
  },[])

  useEffect(()=>{
    fetchData("todos")
  },[fetchData])
  return (
    <>
      <div>use callback</div>
      <UseCallBackChildComponent fetchData={fetchData}/>    
    </>
  );
}

export { UseCallBackComponent };