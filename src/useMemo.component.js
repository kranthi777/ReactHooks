import React,{useState,useEffect,useMemo} from 'react';
import UseMemoChildComponent from './useMemoChild.component';

/*OTHER ALTERNATIVE TO AVOID THIS KEEP ARR HERE
  const arr = [1,2,3,4];
*/
const UseMemoComponent = () => {
  
  //IT WILL NOT RECREATE ON EVERY RE_RENDER
  //IF WE NOT PASS EMPTY ARRAY AS SECOND ARGUMENT THEN IT RE-CREATES ON EVERY RE-RENDER
  const arr = useMemo(() => {
    return [1,2,3,4];
  },[]);
  
  return (
    <>
    <div>use memo</div>
    <hr/>
    <UseMemoChildComponent arr={arr} />
    </>
  );
}

export { UseMemoComponent };