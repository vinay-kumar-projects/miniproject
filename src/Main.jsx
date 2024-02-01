import React from 'react'

function Main() {

let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {};

if (currDate > 1 && currDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
} else if (currDate >= 12 && currDate <19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
} else {
    greeting = 'Good Evening';
    cssStyle.color = '#00b89';
}
 return (
    <>
        <div>
            <h1>
                Hello sir, <span style={cssStyle}> {greeting} </span>
                </h1>
        </div>
    </>
 );
}

export default Main;