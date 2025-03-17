'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SC } from '../modules/login/login-styles';
import { useAuth } from '@/shared/context/auth';

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
        <SC.Title>Вхід в адмінку</SC.Title>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={Yup.object({
            username: Yup.string().required('Обов’язкове поле'),
            password: Yup.string().required('Обов’язкове поле'),
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
