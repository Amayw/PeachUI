import renderer from 'react-test-renderer'
import Icon from '../Icon'

describe("icon",()=>{
    it('可以接受name',()=>{
        const json=renderer.create(<Icon name='tip'/>).toJSON();
        expect(json).toMatchSnapshot();
    })
})
