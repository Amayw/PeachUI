import React from 'react';

interface dialogProps {
    visible:Boolean
}
const Dialog:React.FC<dialogProps>=(props)=>{
    return(
        props.visible?
        <div>
            dialog
        </div>:null
    )
}

export default Dialog;
