import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Message} from './message.js';
export default function App() {
  let [count,setCount]=useState(1);
  let[isMorning,setMorning]=useState(false);
  return (
    <div className ={`box ${isMorning ? 'dayLight':''}`}>
      <h1>Good {isMorning? 'Morning':'Night'} !!!!!</h1>
        <div className="App">
          <Message counter={count}/>
          <br/>
          <button onClick={()=>setCount(count+1)}>update counter</button>
          <button onClick={()=>setMorning(!isMorning)}>update</button>
          </div>
    </div>
  );
}



