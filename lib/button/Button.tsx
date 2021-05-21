import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';
import './button.scss'

interface ButtonProps{
    type:'default'|'success'|'error'|'info'|'primary'|'theme'|'warn',
    loading?:boolean,
    simple?:boolean,
    onClick?: React.MouseEventHandler
}

const sc=scopedClassMaker('peachui-button');
const Button:React.FC<ButtonProps>=(props)=>{
    const onClickEvent:React.MouseEventHandler=(e)=>{
        if(props.onClick){
            props.onClick(e)
        }
    }
    return (
        <button className={classes(sc(),sc(`${props.type}${props.simple?'-simple':''}`))} onClick={onClickEvent}>{props.children}</button>
    )
}

export default Button;
