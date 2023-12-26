import React from 'react';
import { useMutation } from '@apollo/client';
import { useAuth } from '../../core';


import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';
import { LOGIN } from '../../api/auth/mutations/login';

export const Login = () => {

  const [login, { data, loading, error }] = useMutation(LOGIN);
  const signIn = useAuth.use.signIn();


  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
  console.log(data)

    login({
      variables: {
        input: 
          data  
      },
    })
    .then((response) => {
      // set token if credentials is ok
      signIn({ authToken: response.data.signin.authToken});

    })
        
    .catch((error) => {
      // get mutations errors
      console.error('Erreur lors de la mutation :', error);
    });

    
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
