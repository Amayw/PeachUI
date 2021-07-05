import React from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import classes from '../helpers/classes';

interface siderProps extends React.HTMLAttributes<HTMLElement>{

}

const sc=scopedClassMaker('peachui-layout');
const Sider:React.FC<siderProps>=(props)=>{
    const {className,...rest}=props;
    return (
        <div className={classes(sc('sider'),className)}  {...rest}>
            {props.children}
        </div>
    )
}

export default Sider;
