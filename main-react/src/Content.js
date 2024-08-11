import React from "react";
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


 const Main = ({ activeKey }) => {
    return (
        <Layout className="site-layout">
            <Header className="site-layout-background header-layout" >{ activeKey }</Header>
            <Content style={{ margin: '16px' }}>
                <div id="container" className="site-layout-background" style={{ minHeight: 360 }}></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>This Project ©2021 Created by DiDi</Footer>
        </Layout>
    )
 }

 export default Main