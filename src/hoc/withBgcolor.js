import React,{useState} from 'react';

const WithBgColor = (WrappedComponent, OtherComponent) => {
  const [val, setVal] = useState('');
  return (props) => {
    return (<div style={{backgroundColor: props.color}}>
      <OtherComponent>
        <WrappedComponent {...props} test="sometext" />
      </OtherComponent>
    </div>)
}
}

export default WithBgColor;