import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';

interface footerProps extends React.HTMLAttributes<HTMLElement>{

}

const sc=scopedClassMaker('peachui-layout');
const Footer:React.FC<footerProps>=(props)=>{
    const {className,...rest}=props;
    return (
        <div className={classes(sc('footer'),className)}  {...rest}>
            {props.children}
        </div>
    )
}

export default Footer;
