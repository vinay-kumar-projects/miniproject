import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>Vinay Kumar</h1>
    <p>todays date is {currDate}</p>
    <p>Current Time is {currTime}</p>
    </>,
    document.getElementById("root")
)