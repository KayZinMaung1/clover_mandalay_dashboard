import React, { useState } from "react";

// ant design styles
import { Layout, Menu, Avatar, Space, Popover, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import SubMenu from "antd/lib/menu/SubMenu";
// ant design icons
import {
    UserOutlined,
    DashboardOutlined,
    UnorderedListOutlined,
    SaveOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MailOutlined,
} from "@ant-design/icons";
import Login from "../pages/login";

const { Header, Footer, Sider, Content } = Layout;

const text = (
    <Title level={4} style={{ textAlign: "center" }}>
        Profile
    </Title>
);

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    const content = (
        <Space direction="vertical" style={{ textAlign: "center", width: "100%" }}>
            <Title level={5}>
                Kay
            </Title>
            <Text>Shop Name</Text>
            <Button danger >
                Logout
            </Button>
        </Space>
    );

    return (
        <Layout>
            <Header
                style={{ paddingTop: "13px", backgroundColor: "var(--white-color)" }}
            >
                <Button
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        float: "left",
                        backgroundColor: "var(--primary-color)",
                        color: "var(--white-color)",
                        marginRight: "3px",
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                    )}
                </Button>
                <Popover
                    placement="bottom"
                    content={content}
                    title={text}
                    trigger="click"
                >
                    <Avatar
                        style={{ float: "right", backgroundColor: "var(--primary-color)" }}
                        icon={<UserOutlined />}
                        size="large"
                    />
                </Popover>
                <Title style={{ color: "var(--primary-color)" }} level={3}>
                    CLOVER MANDALAY
                </Title>
            </Header>
            <Layout>
                <Sider
                    collapsed={collapsed}
                    style={{ backgroundColor: "var(--white-color)" }}
                >
                    <Menu defaultSelectedKeys={[1]} mode="inline">
                        <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <SubMenu
                            key="Accounts"
                            title="Emails"
                            icon={<MailOutlined />}>
                            <Menu.Item key="ShowMerchants" icon={<UnorderedListOutlined />}>
                                စာရင်း
                            </Menu.Item>
                            <Menu.Item key="CreateMerchants" icon={<SaveOutlined />}>
                                အသစ်ဖန်တီးရန်
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ minHeight: "520px" }}>
                       {/* Bind components */}
                    </Content>
                    <Footer
                        style={{
                            backgroundColor: "var(--white-color)",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "var(--primary-color)",
                        }}
                    >
                        CLOVER DEVELOP BY RCS
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};




export default Admin;
