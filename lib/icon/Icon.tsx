import React from 'react';
import './icon.scss';
// import './svg'
import classes from '../helpers/classes';
import scopedClassMaker from '../helpers/scopedClassMaker';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}
const sc=scopedClassMaker('peachui-icon')
const Icon:React.FC<IconProps>=({className,name,...restProps})=>{
    return (
            <svg className={classes(sc(), className)} {...restProps}>
                <use xlinkHref={`#i-${name}`}/>
            </svg>
    )
}

export default Icon;
