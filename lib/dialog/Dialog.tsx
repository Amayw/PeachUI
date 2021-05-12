import React from 'react';
import {Icon} from '../index';
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
                    <button>
                        ok
                    </button>
                    <button>
                        cancel
                    </button>
                </footer>
            </div>
        </>
        :null
    )
}

export default Dialog;
