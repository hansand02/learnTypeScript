
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const items = [
    { key: 1, label: 'Hjem', linkTo: '/' },
    { key: 2, label: 'Datovelger', linkTo: '/datovelger' },
    { key: 4, label: 'Komp 4', linkTo: '/page4' },
    { key: 5, label: 'Komp 5', linkTo: '/page5' },
];

// Place the menuItems variable in the desired location

type layoutChildrenProps = {
    children: React.ReactNode
}

const GeneralLayout: React.FC<layoutChildrenProps> = ({children} ) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

return (
    <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ flex: 1, minWidth: 0 }}
            >
                {items.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.linkTo}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
        <Content style={{ padding: '0 48px', flex: 1 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 500,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                {children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </Layout>
);
};

export default GeneralLayout;