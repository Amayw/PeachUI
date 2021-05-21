import React, {useState} from 'react';
import Dialog from './Dialog';
import {Button} from '../index';

const DialogExample: React.FunctionComponent = () => {
    const [x,setX]=useState(false);
    const [y,setY]=useState(false);
    return (
        <>
            <div>
                <button onClick={()=>setX(!x)}>button</button>
                <Dialog visible={x} buttons={
                    [
                        <Button type='theme' simple onClick={()=>setX(false)}>
                            取消
                        </Button>,
                        <Button type='theme'  onClick={()=>setX(false)}>
                            确认
                        </Button>
                    ]
                } onClose={()=>setX(false)}>
                    <div>peach&moon</div>
                </Dialog>
            </div>
            <div>
                <button onClick={()=>setY(!x)}>button</button>
                <Dialog visible={y} buttons={
                    [
                        <Button type='theme' simple onClick={()=>setY(false)}>
                            取消
                        </Button>,
                        <Button type='theme'  onClick={()=>setY(false)}>
                            确认
                        </Button>
                    ]
                } onClose={()=>setY(false)} closeOnClickMask={true}>
                    <div>peach&moon</div>
                </Dialog>
            </div>
        </>
    );
};

export default DialogExample;

