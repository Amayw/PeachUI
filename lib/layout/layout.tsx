import React from 'react';

interface layoutProps{

}
const Layout:React.FC<layoutProps>=(props)=>{
    return (
        <>
            {props.children}
        </>
    )
}

export default Layout;
