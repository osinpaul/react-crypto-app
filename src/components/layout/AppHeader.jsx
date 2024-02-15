import React from "react";
import {Menu, Layout, theme} from "antd";
export default function AppHeader() {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
            <Layout.Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
            >
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Навигационный пункт 1</Menu.Item>
                    <Menu.Item key="2">Навигационный пункт 2</Menu.Item>
                    <Menu.Item key="3">Навигационный пункт 3</Menu.Item>
                </Menu>
            </Layout.Header>)
}
