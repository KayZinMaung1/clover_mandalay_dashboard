import React from "react";
import { Form, Input, Typography, Space, Button, Layout} from "antd";

const { Title } = Typography;

const Login = () => {
    const [form] = Form.useForm();

    return (
       
            <Layout
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <Space direction="vertical" size="middle">
                    <Title style={{ textAlign: "center" }}>CLOVER MANDALAY</Title>

                    <Form form={form} className="login-form">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please insert your email!",
                                },
                            ]}
                        >
                            <Input
                                name="email"
                                placeholder="Enter your email!"
                                size="large"
                                style={{ borderRadius: "10px" }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password
                                name="password"
                                placeholder="Enter your password!"
                                size="large"
                                style={{ borderRadius: "10px" }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                size="large"
                                style={{
                                    backgroundColor: "var(--primary-color)",
                                    color: "var(--white-color)",
                                    borderRadius: "10px",
                                    width: "100%",
                                }}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Space>
            </Layout>
       
    );
};


export default Login;
