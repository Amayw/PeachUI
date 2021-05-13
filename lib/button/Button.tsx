import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';
import './button.scss'

interface ButtonProps{
    type:'default'|'success'|'error'|'info'|'primary'|'theme'|'warn',
    loading?:boolean,
    simple?:boolean
}

const sc=scopedClassMaker('peachui-button');
const Button:React.FC<ButtonProps>=(props)=>{

    return (
        <button className={classes(sc(),sc(`${props.type}${props.simple?'-simple':''}`))}>{props.children}</button>
    )
}

export default Button;
