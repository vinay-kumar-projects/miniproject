import React from 'react';
import ReactDOM from 'react-dom';
import List, {surName, myName, myNames} from './Main';

ReactDOM.render(
    
    <>
    <ol>
        <li>
            {List} {surName}
        </li>
        <li>
            {myName()}
        </li>
        <li>
            {myNames()}
        </li>
    </ol>
    </>,
    document.getElementById('root')
);