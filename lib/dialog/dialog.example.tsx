import React, {useState} from 'react';
import Dialog from './Dialog';

const DialogExample: React.FunctionComponent = () => {
    const [x,setX]=useState(false);
    return (
        <div>
            <button onClick={()=>setX(!x)}>button</button>
            <Dialog visible={x}>
                <div>hihihi</div>
            </Dialog>
        </div>
    );
};

export default DialogExample;

