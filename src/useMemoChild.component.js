import React,{memo,useState,useEffect} from 'react';

const UseMemoChildComponent = (props) => {
  
  console.log("useMemoChild")
  return (
    <>
    <div>use memo child</div>
    </>
  );
}

//BY DEFAULT MEMO ONLY MEMOIZE PRIMITIVE TYPES
//IF WE WANT TO MEMOIZE NON_PRIMITIVETYPE WE NEED TO MEMOIZE THOSE IN PARENT COMPONENT
export default  memo(UseMemoChildComponent);