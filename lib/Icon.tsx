import React from 'react';
import './svg'

interface IconProps {
    name:string
}
const Icon:React.FC<IconProps>=(props)=>{
    return (
        <div>
            <svg>
                <use xlinkHref={`#${props.name}`} />
            </svg>
        </div>
    )
}

export default Icon;
