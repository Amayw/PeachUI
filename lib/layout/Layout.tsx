import React, {ReactElement} from 'react';
import scopedClassMaker from '../helpers/scopedClassMaker';
import './layout.scss'
import classes from '../helpers/classes';
interface layoutProps extends React.HTMLAttributes<HTMLElement>{
}

const sc=scopedClassMaker('peachui-layout');

const Layout:React.FC<layoutProps>=(props)=>{
    const {className,...rest}=props;

    const judeSider = () => {
        let hasSider = false
        React.Children.forEach(props.children, (child:ReactElement) => {
            if (child?.type === 'Sider') {
                hasSider = true
            }
        })
        return hasSider
    }
    return (
        <div className={classes(judeSider()?classes(sc(),'has-sider'):sc(),className)} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;

