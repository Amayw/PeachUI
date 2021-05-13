import React from 'react';
import {Button, Icon} from '../index';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './dialog.scss'

const sc=scopedClassMaker('peachui-dialog');

interface dialogProps {
    visible:Boolean
}
const Dialog:React.FC<dialogProps>=(props)=>{
    return(
        props.visible?
        <>
            <div className={sc('mask')}/>
            <div className={sc()}>
                <div className={sc('close')}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    <Button type='theme' simple>
                        取消
                    </Button>
                    <Button type='theme'>
                        确认
                    </Button>
                </footer>
            </div>
        </>
        :null
    )
}

export default Dialog;
