import React,{useState} from 'react';

const withClass =  (WrappedComponent, className) => {
  //here I am returning normal function
  //here props is what gets passed to that component
  //in this case name={'kittu} passed
  return (props)=> (
    <div className={className}>
      <p>in with class hoc</p>
      <WrappedComponent {...props}/>
    </div>
  )
}

export default withClass;