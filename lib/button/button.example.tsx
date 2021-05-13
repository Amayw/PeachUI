import React from 'react';
import Button from './Button';
import "./button.example.scss"
import {Icon} from '../index';
const ButtonExample: React.FunctionComponent = () => {
    return (
        <div className='button-wrapper'>
            <>
                <Button type='theme'>theme</Button>
                <Button type='default'>default</Button>
                <Button type='primary'>primary</Button>
                <Button type='success'>success</Button>
                <Button type='error'>error</Button>
                <Button type='info'>info</Button>
                <Button type='warn'>warn</Button>
            </>
            <>
                <Button type='default'><Icon name='settings'/>设置</Button>
                <Button type='default'>设置<Icon name='settings'/></Button>
                <Button type='default' loading>设置<Icon name='settings'/></Button>
            </>
        </div>
    );
};

export default ButtonExample;
