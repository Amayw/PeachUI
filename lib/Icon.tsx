import React from 'react';
import './svg';
import './icon.scss';
import classnames from 'classnames'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}

const Icon:React.FC<IconProps>=(props)=>{
    const {className,name,...restProps}=props;
    return (
            <svg className={classnames('icon', className)} {...restProps}>
                <use xlinkHref={`#${name}`} />
            </svg>
    )
}

export default Icon;
