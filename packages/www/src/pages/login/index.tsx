import React from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../../modules/auth/Login';
import { IUser } from '../../types/user';

const Login: React.FC = () => {
  const router = useRouter();

  const onSubmit = React.useCallback(async (values: IUser) => {
    try {
      const response = await fetch('http://localhost:4004/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      await router.push('/admin');
    } catch (e) {
      handleError(e);
    }
  }, []);

  const handleError = (e: Error) => {
    // eslint-disable-next-line no-console
    console.log('Handler error', e.message);
  };

  return <LoginPage onSubmit={onSubmit} />;
};

export default Login;
