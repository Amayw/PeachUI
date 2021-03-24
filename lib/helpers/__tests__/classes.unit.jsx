import classes from '../classes'
describe('classes',()=>{
    it('可以接收0个className',()=>{
        const result=classes();
        expect(result).toEqual('');
    })

    it('可以接收1个className',()=>{
        const result=classes('a');
        expect(result).toEqual('a');
    })

    it('可以接收2个className',()=>{
        const result=classes('a','b');
        expect(result).toEqual('a b');
    })

    it('可以接受undefined，且结果中没有undefined',()=>{
        const result=classes('a',undefined);
        expect(result).toEqual('a');
    })

    it('可以接收奇奇怪怪的值',()=>{
        const result=classes('a','b','中文',null,false);
        expect(result).toEqual('a b 中文');
    })
})
