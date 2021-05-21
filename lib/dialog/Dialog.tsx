import React, {ReactElement} from 'react';
import {Icon} from '../index';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './dialog.scss'

const sc=scopedClassMaker('peachui-dialog');

interface dialogProps {
    visible:Boolean,
    buttons:Array<ReactElement>,
    onClose:React.MouseEventHandler,
    closeOnClickMask?:Boolean
}
const Dialog:React.FC<dialogProps>=(props)=>{
    const onClickClose:React.MouseEventHandler=(e)=>{
        props.onClose(e);
    }
    const onClickMaskClose:React.MouseEventHandler=(e)=>{
        if(props.closeOnClickMask){
            props.onClose(e);
        }
    }

    return(
        props.visible?
        <>
            <div className={sc('mask')} onClick={onClickMaskClose}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    {props.buttons.map((item,index)=>
                        React.cloneElement(item,{key:index})
                    )}
                </footer>
            </div>
        </>
        :null
    )
}

Dialog.defaultProps={
    closeOnClickMask:false
}
export default Dialog;
