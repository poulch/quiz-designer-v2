import React from 'react';
import Card, { CardTitle } from '../../components/card/Card';
import Container from '../../components/container/Container';
import LoginForm from './components/LoginForm';
import { IUser } from '../../types/user';

interface ILoginPageProps {
  onSubmit: (values: IUser) => void;
}

const LoginPage: React.FC<ILoginPageProps> = ({ onSubmit }) => {
  return (
    <Container>
      <Card>
        <CardTitle>Log In</CardTitle>
        <LoginForm onSubmit={onSubmit} />
      </Card>
    </Container>
  );
};

export default LoginPage;
