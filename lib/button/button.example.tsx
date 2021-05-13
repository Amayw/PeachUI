import React from 'react';
import Button from './Button';
import "./button.example.scss"
import {Icon} from '../index';
const ButtonExample: React.FunctionComponent = () => {
    return (
        <div className='button-wrapper'>
            <>
                <Button type='theme'>theme</Button>
                <Button type='primary'>primary</Button>
                <Button type='success'>success</Button>
                <Button type='error'>error</Button>
                <Button type='info'>info</Button>
                <Button type='warn'>warn</Button>
            </>
            <>
                <Button type='theme' simple>theme</Button>
                <Button type='primary' simple>primary</Button>
                <Button type='success' simple>success</Button>
                <Button type='error' simple>error</Button>
                <Button type='info' simple>info</Button>
                <Button type='warn' simple>warn</Button>
            </>
            <>
                <Button type='primary' simple><Icon name='settings'/>设置</Button>
                <Button type='primary' simple>设置<Icon name='settings'/></Button>
            </>
        </div>
    );
};

export default ButtonExample;
