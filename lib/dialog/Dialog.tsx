import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom'
import {Button, Icon} from '../index';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './dialog.scss'

const sc=scopedClassMaker('peachui-dialog');

interface dialogProps {
    visible:Boolean,
    buttons?:Array<ReactElement>,
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
        ReactDOM.createPortal(props.visible?
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
                        {props.buttons?.map((item,index)=>
                            React.cloneElement(item,{key:index})
                        )}
                    </footer>
                </div>
            </>
            :null,document.body)
    )
}

Dialog.defaultProps={
    closeOnClickMask:false
}

const alert=(content:string)=>{
    const component=<Dialog visible={true} onClose={()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }}>{content}</Dialog>
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}

const confirm=(content:string,onConfirm?:()=>void,onCancel?:()=>void)=>{
    const component=<Dialog visible={true} onClose={()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        onCancel&&onCancel();
    }} buttons={
        [
            <Button type='theme' simple onClick={()=>{
                ReactDOM.render(React.cloneElement(component,{visible:false}),div);
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                onConfirm&&onConfirm();
            }}>
                取消
            </Button>,
            <Button type='theme'  onClick={()=>{
                ReactDOM.render(React.cloneElement(component,{visible:false}),div);
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                onCancel&&onCancel();
            }}>
                确认
            </Button>
        ]
    }>{content}</Dialog>
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}

export {alert,confirm};
export default Dialog;
