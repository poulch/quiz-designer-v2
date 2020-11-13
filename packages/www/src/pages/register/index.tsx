import React from 'react';
import { useRouter } from 'next/router';
import RegisterPage from '../../modules/auth/Register';
import { IUser } from '../../types/user';

export interface IRegisterUser extends IUser {
  confirmPassword: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onSubmit = React.useCallback(async (values: IRegisterUser) => {
    console.log('values', JSON.stringify(values, null, 2));
    try {
      const response = await fetch('http://localhost:4004/auth/register', {
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

  return <RegisterPage onSubmit={onSubmit} />;
};

export default Register;
