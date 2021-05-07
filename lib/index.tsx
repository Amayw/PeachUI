import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/Icon'

const fn:React.MouseEventHandler=(e)=>{
    console.log(e.target)
}

// const fn2:React.MouseEventHandler=(e)=>{
//     console.log('enter')
// }
ReactDOM.render(<Icon className={test} name='left' onClick={fn}
                      onMouseLeave={()=>{console.log('leave')}}
                      onMouseEnter={()=>{console.log('enter')}}/>,
    document.querySelector('#root'));
