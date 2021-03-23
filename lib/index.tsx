import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon'

const fn:React.MouseEventHandler=(e)=>{
    console.log(e.target)
}
ReactDOM.render(<Icon name='i-tip' onClick={fn}/>,document.querySelector('#root'));
