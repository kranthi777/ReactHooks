import React,{useState} from 'react';
import './App.css';
import {UseEffectComponent} from './UseEffect.component';
import {UseMemoComponent} from './useMemo.component';
import {UseCallBackComponent} from './useCallback.component';
import MemoComponent from './Memo';
import HOCDemo from './hoc.component';
import UserList from './UserList.component';

function App() {
  const [displayItem, setDisplayItem] = useState(true);
  const [counter,setCounter] = useState(0);
  const handleClick = (e) => {
    setDisplayItem(prevState=>!prevState);
  }
  const incrementCounter = () => {
    setCounter(prevState=>prevState+1);
  }
  return (
    <div className="App">
      <h2>
        React Hooks
      </h2>
      <button onClick={incrementCounter}>counter</button>
      <hr/>
      {counter}
      <hr/>
      <button onClick={handleClick}>showHide</button>
      <hr/>
      {/*displayItem && <UseEffectComponent/>*/}
      <hr/>
      <UseMemoComponent />
      <hr/>
      <UseCallBackComponent />
      <hr/>
      <MemoComponent name={'kranthi'} obj={{'age':24,city:'hyd'}}/>
      <hr/>
      <HOCDemo name={'kittu'} />
      <hr/>
      {/*CUSTOM HOOK */}
      <h2>Fetching data using custom hooks</h2>
      <UserList/>
    </div>
  );
}

export default App;
