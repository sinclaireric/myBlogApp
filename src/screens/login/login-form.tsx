import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { StyleSheet } from 'react-native';

import {

  Button,
  ControlInput,
} from '../../components';
import { Text, View } from 'react-native';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email requis',
    })
    .email('format email invalide'),
  password: z
    .string({
      required_error: 'Mot de passe requis',
    })
    .min(6, 'Minimun 6 caractères'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <>
    <View style={styles.content}>
      
      <View>
   
      <View style={styles.text}>
      <Text>
        
        <Text style={{fontSize:24}}>
          Connexion
        </Text>
      </Text>

      <Text>
        Acceder à votre compte
      </Text>
</View>
      

      <ControlInput
        testID="email-input"
        control={control}
        name="email"
        placeholder="email"
      />
      <ControlInput
        testID="password-input"
        control={control}
        name="password"
        placeholder="mot de passe"
        secureTextEntry={true}
      />
      <Button
        testID="login-button"
        label="Se connecter"
        onPress={handleSubmit(onSubmit)}
        
      />

</View>
    </View>

  </>
  );
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    width:'100%',

    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginBottom:40,
    borderColor:'#cccccc',
    borderRadius:4,
    width:'100%',
  }
 
});