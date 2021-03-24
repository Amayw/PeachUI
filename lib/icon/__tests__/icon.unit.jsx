import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon'

describe("icon",()=>{
    it('可以接收name',()=>{
        const json=renderer.create(<Icon name='left'/>).toJSON();
        expect(json).toMatchSnapshot();
    })
})
