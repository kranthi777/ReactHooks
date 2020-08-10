import React, { memo } from "react";

const StaticContent = () => {
  console.log("static content");
  /*this is static component so memoizing it so
   that it will noe re render when parent component re-renders */
  return (
    <div>
      some static content
    </div>
  );
};

export default memo(StaticContent);