import React from 'react';
import ReactDOM from 'react-dom'; 

//First method of Rendering.

ReactDOM.render(<h1>Deekonda</h1>, document.getElementById("root"))

//Second method of Rendering by using babel. 

ReactDOM.render(React.createElement("h1", null, "Vinay"), document.getElementById("root"))

//Third method of Rendering by using pure JavaScript.

var h1 = document.createElement("h1")
h1.innerHTML = "Kumar";
document.getElementById("root").appendChild(h1);