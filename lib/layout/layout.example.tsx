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
                <Header>header</Header>
                <Main>main</Main>
                <Footer>footer</Footer>
            </Layout>
            <h1>示例二</h1>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Sider>sider</Sider>
                    <Main>main</Main>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </>
    )
}

export default LayoutExample;
