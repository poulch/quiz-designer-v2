import React from 'react';
import Card, { CardTitle } from '../../components/card/Card';
import Container from '../../components/container/Container';
import RegisterForm from './components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Signup</CardTitle>
        <RegisterForm />
      </Card>
    </Container>
  );
};

export default RegisterPage;
