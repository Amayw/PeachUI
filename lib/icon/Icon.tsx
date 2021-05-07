import React from 'react';
import './icon.scss';
// import './svg'
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}

const Icon:React.FC<IconProps>=({className,name,...restProps})=>{
    return (
            <svg className={classes('icon', className)} {...restProps}>
                <use xlinkHref={`#i-${name}`}/>
            </svg>
    )
}

export default Icon;
