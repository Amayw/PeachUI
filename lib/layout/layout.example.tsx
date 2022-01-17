import React from 'react';
import Layout from './Layout';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';



const LayoutExample:React.FC=()=>{
    return (
        <>
            <h1>示例一</h1>
            <Layout style={{height:500+'px'}} className='hi'>
                <Header style={{height:100+'px'}} className='1'>header</Header>
                <Main style={{height:300+'px'}} className='2'>main</Main>
                <Footer style={{height:100+'px'}} className='3'>footer</Footer>
            </Layout>
            <h1>示例二</h1>
            <Layout style={{height:500+'px'}}>
                <Header>header</Header>
                <Layout  style={{height:400+'px'}}>
                    <Sider>sider</Sider>
                    <Main>main</Main>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </>
    )
}

export default LayoutExample;
