import React from 'react';

interface footerProps{

}
const Footer:React.FC<footerProps>=(props)=>{
    return (
        <>
            {props.children}
        </>
    )
}

export default Footer;
