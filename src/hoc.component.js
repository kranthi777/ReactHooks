import React,{useState} from 'react';
import withClass from './hoc/withClass';

const HOCDemo = (props) => {
  return (
    <div>
      calling hoc from HOCDemo component
      <hr/>
      {props.name}
    </div>
  )
}
/*
 Another form of hoc using props.children

hoc.component.js
 <withClass>
  <h1>we are calling from here</h1>
 </withClass>

 withClass.js 
 const withClass = (props) => {
   return(
     <div>
       <p>some content</p>
       {props.children}
     </div>
   )
 }
*/

export default withClass(HOCDemo,'kranthi');