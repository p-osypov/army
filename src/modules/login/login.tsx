'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '@/shared/context/auth';
import { SC } from './login.styles';

const Login = () => {
  const router = useRouter();
  const { login, username } = useAuth();

  useEffect(() => {
    if (username) {
      router.push('/admin');
    }
  }, [username, router]);

  const handleLogin = (values: { username: string; password: string }) => {
    login(values.username, values.password);
  };

  return (
    <SC.Container>
      <SC.LoginBox>
        <SC.Title>Авторизуйтесь</SC.Title>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={Yup.object({
            username: Yup.string().required('Поле є обов’язковим'),
            password: Yup.string().required('Поле є обов’язковим'),
          })}
          onSubmit={handleLogin}
        >
          <SC.StyledForm>
            <SC.StyledField name="username" placeholder="Username" />
            <ErrorMessage name="username" component={SC.ErrorText} />

            <SC.StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component={SC.ErrorText} />

            <SC.Button type="submit">Увійти</SC.Button>
          </SC.StyledForm>
        </Formik>
      </SC.LoginBox>
    </SC.Container>
  );
};

export default Login;
