import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";


ReactDOM.render(
    <>
    <h1 contentEditable = "true">Vinay Kumar</h1>
    <a href='https://picsum.photos' target='_lorem'>
    <img src = {img1} alt = "randomImages" />
    <img src = {img2} alt = "randomImages" />
    <img src = {img3} alt = "randomImages" />
    </a>
    </>,
    document.getElementById("root")
)