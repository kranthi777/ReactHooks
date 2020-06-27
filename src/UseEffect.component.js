import React,{useState,useEffect} from 'react';

const UseEffectComponent = () => {
   const [count, setCount] = useState(0);
  /*calls for componentdidmount: useEffect1,
  componentdidupdate: cleanup1,useEffect1,
  componentwillunmount: cleanup1 */
  useEffect(() => {
    console.log("useEffect1");
    return () => {
      console.log("cleanup1");
    }
  })
  /*calls for componentdidmount: useEffect2,
  componentwillunmount: cleanup2
   */
  useEffect(() => {
    console.log("useEffect2");
    return () => {
      console.log("cleanup2");
    }
  },[])
  /*calls for componentdidmount: useEffect3,
  componentDidUpdate: cleanup3,useEffect3 //only calls if count changes
  componentwillunmount: cleanup3
   */
  useEffect(() => {
    console.log("useEffect3");
    return () => {
      console.log("cleanup3");
    }
  },[count])

  const onBtnClick = () => {
    setCount(prevState=>prevState+1);
  }
  return(
    <div>
      <button onClick={onBtnClick}>useeffectClick</button>
    </div>
  )
}

export { UseEffectComponent };