import React from 'react';
import Card, { CardTitle } from '../../components/card/Card';
import Container from '../../components/container/Container';
import RegisterForm from './components/RegisterForm';
import { IRegisterUser } from '../../pages/register';

interface IRegisterPage {
  onSubmit: (values: IRegisterUser) => void;
}

const RegisterPage: React.FC<IRegisterPage> = ({ onSubmit }) => {
  return (
    <Container>
      <Card>
        <CardTitle>Signup</CardTitle>
        <RegisterForm onSubmit={onSubmit} />
      </Card>
    </Container>
  );
};

export default RegisterPage;
