import React from 'react';
import Card, { CardTitle } from '../../components/card/Card';
import Container from '../../components/container/Container';
import LoginForm from './components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Log In</CardTitle>
        <LoginForm />
      </Card>
    </Container>
  );
};

export default LoginPage;
