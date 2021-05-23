import React, {useState} from 'react';
import Dialog, {alert, confirm,modal} from './Dialog';
import {Button} from '../index';

const DialogExample: React.FunctionComponent = () => {
    const [x,setX]=useState(false);
    const [y,setY]=useState(false);
    //函数返回操作函数内部变量的API
    const openModal=()=>{
        const close=modal('modal',<h1>你好啊<button onClick={()=>close()}>close</button></h1>)
    }
    return (
        <>
            <div>
                <Button type='theme' onClick={()=>setX(!x)}>button</Button>
                <Dialog title="提示" visible={x} buttons={
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
                <Dialog title="提示" visible={y} buttons={
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
                <Button type='theme' simple onClick={()=>alert('alert','hi')}>alert</Button>
            </div>

            <div>
                <Button type='theme' simple onClick={()=>confirm('confirm','hihihi',()=>{console.log('no')},()=>{console.log('yes')})}>confirm</Button>
            </div>

            <div>
                <Button type='theme' simple onClick={openModal}>modal</Button>
            </div>
        </>
    );
};

export default DialogExample;

