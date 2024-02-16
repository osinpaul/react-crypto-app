import React, {useState} from 'react';

import {Breadcrumb, Layout, Menu, theme} from 'antd';
import AppHeader from "./components/layout/AppHeader.jsx";
import AppSider from "./components/layout/AppSider.jsx";
import AppContent from "./components/layout/AppContent.jsx";
import AppFooter from "./components/layout/AppFooter.jsx";

const {Header, Content, Footer, Sider} = Layout;


const App = () => {

    return (
            <Layout
                    style={{
                        minHeight: '100vh',
                    }}
            >
                <AppSider/>
                <Layout>
                    <AppHeader/>
                    <AppContent/>
                    <AppFooter/>
                </Layout>
            </Layout>
    );
};
export default App;
