import React from 'react';
import './svg'
import './icon.scss'
interface IconProps {
    name:string
}
const Icon:React.FC<IconProps>=(props)=>{
    return (
            <svg className='icon'>
                <use xlinkHref={`#${props.name}`} />
            </svg>
    )
}

export default Icon;
