import React from 'react';
import './svg'
import './icon.scss'
interface IconProps {
    name:string,
    onClick?:React.MouseEventHandler<SVGElement>
}
const Icon:React.FC<IconProps>=(props)=>{
    return (
            <svg className='icon' onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`} />
            </svg>
    )
}

export default Icon;
