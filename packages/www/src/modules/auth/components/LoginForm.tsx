import React from 'react';
import Link from 'next/link';
import { Input, Form, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { IUser } from '../../../types/user';

interface ILoginFormProps {
  onSubmit: (values: IUser) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  return (
    <Form name='login' className='login-form' initialValues={{ remember: true }} onFinish={onSubmit}>
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
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
        <Link href='/register'>
          <a>
            <Button type='default' htmlType='button' className='login-form-button'>
              Signup
            </Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
