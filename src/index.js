import React from 'react';
import ReactDOM from 'react-dom';
import * as ques from './Main';

ReactDOM.render(
    
    <>
        <ol>
            <li>{ ques.default}</li>
            <li>{ ques.surName}</li>
            <li>{ ques.myName()}</li>
            <li>{ ques.myNames()}</li>
        </ol>
    </>,
    document.getElementById('root')
);