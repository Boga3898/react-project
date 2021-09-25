import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date());
 

 useEffect(() => {
  var timer = setInterval( () => tick(), 1000 );


  return function cleanup() {
      clearInterval(timer);
    };
 });

   function tick() {
    setDate(new Date());
   }
   const cssStyle = {
        fontSize:"50px",
        width: '500px',
        height: '200px',
        borderRadius:'12px',
        padding:"15px",
        boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.4)"
   };
     let greeting = '';

   if(date.getHours()%2 ===0){
    greeting = ' "Yeahh its Even Time" ';
    cssStyle.backgroundColor = 'black';
   }
   else{
    greeting = ' "Yeahh its Odd Time" ';
    cssStyle.backgroundColor = 'white'; 
   }

  
   return (
      <div class="main-div">
        <h1>Digital Clock</h1>
        <h2 style={cssStyle} >{date.toLocaleTimeString()}
        <div>{ greeting }</div>
        </h2>
      </div>
    );
}

export default Clock;