import React, {useState} from 'react';
import Dialog, {alert, confirm} from './Dialog';
import {Button} from '../index';

const DialogExample: React.FunctionComponent = () => {
    const [x,setX]=useState(false);
    const [y,setY]=useState(false);
    return (
        <>
            <div>
                <Button type='theme' onClick={()=>setX(!x)}>button</Button>
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
                <Button type='theme' onClick={()=>setY(!x)}>button</Button>
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
            <div>
                <Button type='theme' simple onClick={()=>alert('hi')}>alert</Button>
            </div>

            <div>
                <Button type='theme' simple onClick={()=>confirm('hihihi',()=>{console.log('no')},()=>{console.log('yes')})}>confirm</Button>
            </div>
        </>
    );
};

export default DialogExample;

