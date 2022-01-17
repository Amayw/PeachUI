import React, {ReactElement} from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './layout.scss'
import classes from '../helpers/classes';
import Sider from './Sider';
interface layoutProps extends React.HTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}

const sc=scopedClassMaker('peachui-layout');

const Layout:React.FC<layoutProps>=(props)=>{
    const {className,...rest}=props;

    // let hasActive=false;
    // if((props.children as Array<ReactElement>).length){
    //     (props.children as Array<ReactElement>).map(child=>{
    //         console.log(child.type)
    //         if(child.type === Sider){
    //             hasActive=true;
    //         }
    //     })
    // }

    function judeSider(){
        let hasActive=false;
        React.Children.map(props.children,(child:ReactElement)=>{
            if(child?.type===Sider){
                hasActive=true;
            }
        })
        return hasActive;
    }
    return (
        <div className={classes(className,judeSider()?sc('has-active'):sc())} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;

