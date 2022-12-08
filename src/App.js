import React, { useState } from 'react';
import './App.css';
import { Button,  Checkbox,  Col,  Form,  Input,  InputNumber,Row,  Select, Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>


    <Row>
      <Col span={16}>
      <div className='imag' >
      <img src="manav2.jpeg" alt="manav" className='image'/>
    </div>
      </Col>
      <Col span={8}>  
    <div className="signup">
    <h2>Welcome</h2>
    <h4>Please enter your details</h4>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '+91',
      }}
      scrollToFirstError
    >
      
      <h5>First name</h5> 
      <Form.Item
      name="firstname" 
      rules={[
        {
          required: true,
          message: 'Please input your first name!',
        },
      ]}>
      <Input /> 
      </Form.Item>
      <h5>Last name</h5>
      <Form.Item 
      name="lastname" 
      rules={[
        {
          required: true,
          message: 'Please input your last name!',
        },
      ]}>
      <Input />
      </Form.Item>
      <h5>Email</h5>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <h5>Password</h5>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

        <h5>Phone</h5>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I've read and agree with Terms of Service and our Privacy Policy <a href="">Agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button htmlType="submit" className='button'>
          Sign-Up
        </Button>
      </Form.Item>
    </Form>
    </div>
    </Col>
    </Row>
    <RemoveScrollBar /> 
    </>
  );
};
export default App;
