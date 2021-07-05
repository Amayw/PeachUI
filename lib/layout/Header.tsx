import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';

interface headerProps extends React.HTMLAttributes<HTMLElement>{

}

const sc=scopedClassMaker('peachui-layout');
const Header:React.FC<headerProps>=(props)=>{
    const {className,...rest}=props;
    return (
        <div className={classes(sc('header'),className)}  {...rest}>
            {props.children}
        </div>
    )
}

export default Header;

