import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { z } from 'zod';

import { CREATE_ARTICLE } from '../../api/articles/mutations/article';
import { Button, View, StyleSheet } from 'react-native';

import { ControlInput, showErrorMessage} from '../../components';
import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

const schema = z.object({
  textContent: z.string().min(8,'Entrez au moins 8 caractères'),
});

type FormType = z.infer<typeof schema>;

export const AddPost = () => {
  const { navigate } = useNavigation();
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [createArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE);




  const onSubmit = (data: FormType) => {


    createArticle({
      variables: {
        input: 
          data  
      },
    })
    .then((response) => {
      // set token if credentials is ok
      
      showMessage({
        message: 'Post added successfully',
        type: 'success',
      });

      navigate('Feed')
      

    })
        
    .catch((error) => {
      // get mutations errors
      console.error('Erreur lors de la mutation :', error);
      showErrorMessage('Error adding post');
    });

    
  };


  return (
    <View style={styles.container} >
      
      <ControlInput
        name="textContent"
        label="Contenu"
        control={control}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
        testID="body-input"
      />
      <Button
      title='Valider'
        onPress={handleSubmit(onSubmit)}
        testID="add-post-button"
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  
    padding: 20,
  },

});