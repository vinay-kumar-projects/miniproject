import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";

// .heading {
//     color: #fa9191;
//     text-transform: capitalize;
//     text-align: center;
//     font-weight: bold;
//     text-shadow: 0px, 2px, 4px, #ffe9cf;
//     margin: 50px;
//     font-family: 'Josefin Sans', sans-serif;
  
//   }

const heading = {
    color: "#fa9191",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "'Josefin Sans', sans-serif",
    margin: "50px"
}

ReactDOM.render(
    <>
    <h1 style={heading} >Vinay Kumar</h1>
    <div className='img_div'>
    <img src = {img1} alt = "randomImages" />
    <img src = {img2} alt = "randomImages" />
    <img src = {img3} alt = "randomImages" />
    </div>
    </>,
    document.getElementById("root")
)