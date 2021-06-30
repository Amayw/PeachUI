import React from 'react';

interface siderProps{

}
const Sider:React.FC<siderProps>=(props)=>{
    return (
        <>
            {props.children}
        </>
    )
}

export default Sider;
