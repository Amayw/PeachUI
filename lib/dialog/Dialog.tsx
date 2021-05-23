import React, {ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom'
import {Button, Icon} from '../index';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './dialog.scss'

const sc=scopedClassMaker('peachui-dialog');

interface dialogProps {
    title:ReactNode|ReactFragment,
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
                        {props.title}
                    </header>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    {props.buttons&&<footer className={sc('footer')}>
                        {props.buttons?.map((item,index)=>
                            React.cloneElement(item,{key:index})
                        )}
                    </footer>}
                </div>
            </>
            :null,document.body)
    )
}

Dialog.defaultProps={
    closeOnClickMask:false
}

const alert=(title:ReactNode|ReactFragment,content:string)=>{
    const onClose=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component=<Dialog title={title} visible={true} onClose={onClose}
    buttons={[<Button type='theme' >ok</Button>]}
    >{content}</Dialog>
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}

const confirm=(title:ReactNode,content:string,onConfirm?:()=>void,onCancel?:()=>void)=>{
    const onClose=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        onCancel&&onCancel();
    }
    const onClickNo=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        onConfirm&&onConfirm();
    }
    const onClickYes=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        onCancel&&onCancel();
    }

    const component=<Dialog title={title} visible={true} onClose={onClose} buttons={
        [
            <Button type='theme' simple onClick={onClickNo}>
                取消
            </Button>,
            <Button type='theme'  onClick={onClickYes}>
                确认
            </Button>
        ]
    }>{content}</Dialog>
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
}

const modal=(title:ReactNode|ReactFragment,content:ReactNode|ReactFragment)=>{
    const onClose=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component=<Dialog title={title} visible={true} onClose={()=>onClose()}>{content}</Dialog>
    const div=document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
    return onClose;
}

export {alert,confirm,modal};
export default Dialog;
