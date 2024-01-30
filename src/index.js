import React from 'react'
import ReactDOM from 'react-dom'

let fname = "Vinay ";
let mname = "Kumar ";
let lname = ".D"

ReactDOM.render(

    <>
    <h1>My name is {`${fname} ${mname} ${lname}`}</h1>
    </>,

    document.getElementById("root"))