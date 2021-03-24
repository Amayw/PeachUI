import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon'
import {mount} from 'enzyme'

describe("icon",()=>{
    it('可以接收name',()=>{
        const json=renderer.create(<Icon name='left'/>).toJSON();
        expect(json).toMatchSnapshot();
    })

    it('可以被点击',()=>{
        const fn=jest.fn();
        const component=mount(<Icon name='left' onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    })
})
