import React from 'react';

interface mainProps{

}
const Main:React.FC<mainProps>=(props)=>{
    return (
        <>
            {props.children}
        </>
    )
}

export default Main;
