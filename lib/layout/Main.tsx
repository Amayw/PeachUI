import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';

interface mainProps extends React.HTMLAttributes<HTMLElement>{

}

const sc=scopedClassMaker('peachui-layout');
const Main:React.FC<mainProps>=(props)=>{
    const {className,...rest}=props;
    return (
        <div className={classes(sc('main'),className)}  {...rest}>
            {props.children}
        </div>
    )
}

export default Main;
