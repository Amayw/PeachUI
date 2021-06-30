import React from 'react';

interface headerProps{

}
const Header:React.FC<headerProps>=(props)=>{
    return (
        <>
            {props.children}
        </>
    )
}

export default Header;
