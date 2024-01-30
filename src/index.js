import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
let cssStyle = {};

if(currDate >= 1 && currDate <12){
    greeting = 'Good Mornig';
    cssStyle.color = 'Green';

} else if(currDate >=12 && currDate <19){
    greeting = 'Good AfterNoon';
    cssStyle.color = 'Orange';

} else {
    greeting = 'Good Night';
    cssStyle.color = 'Black';
}

ReactDOM.render(
    <>
    <div>
    <h1 className='heading'>Hello sir, <span style={cssStyle}> { greeting } </span></h1>
    </div>
    </>,
    document.getElementById('root')
);