import React,{memo} from 'react';
const MemoComponent = ({name, obj}) => {

/*
  THIS IS FOR TESTING MEMO COMPONENT LEVEL
  HERE MY PROPS CONTAINS PRIMITIVE AND NON-PRIMITIVE TYPES
  MEMO ON COMPONENT LEVEL ONLY WORKS PROPERLY FOR PRIMITIVE TYPES
  IT NOT WORKS FOR NON-PRIMITIVE TYPES i.e., IT RE-RENDERS WHEN PARENT COMPONENT UPDATES
  TO AVOID THIS WE NEED TO MEMOIZE NON-PRIMITIVE PROPS USING useMemo/useCallback
  (or)
  DECLARE THE NON-PRIMITVE PROPS OUTSIDE THE COMPONENT

*/
 console.log("memo component level")
  return (
    <>
    <div>THIS IS FOR TESTING MEMO COMPONENT LEVEL</div>
    <div>{name}</div>
    <div>{obj.city}</div>
    <hr/>
    </>
  );
}

export default memo(MemoComponent);