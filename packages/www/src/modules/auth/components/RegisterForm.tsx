import React from 'react';
import { Input, Form, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { IRegisterUser } from '../../../pages/register';

interface IRegisterForm {
  onSubmit: (values: IRegisterUser) => void;
}

const RegisterForm: React.FC<IRegisterForm> = ({ onSubmit }) => {
  return (
    <Form name='login' onFinish={onSubmit}>
      <Form.Item name='displayName' rules={[{ required: true, message: 'Please input your Display Name!' }]}>
        <Input prefix={<UserOutlined />} placeholder='Display name' />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Email is invalid!' },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder='Email address' />
      </Form.Item>

      <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined />} type='password' placeholder='Password' />
      </Form.Item>

      <Form.Item name='confirmPassword' rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined />} type='password' placeholder='Confirm password' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Register
        </Button>
        <Link href='/login'>
          <a>
            <Button type='default' htmlType='button'>
              Log in
            </Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
