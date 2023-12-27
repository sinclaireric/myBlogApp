import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { z } from 'zod';

/* import { useAddPost } from '../../api'; */
import { Button, View, StyleSheet } from 'react-native';

import { ControlInput, showErrorMessage} from '../../components';

const schema = z.object({
  textContent: z.string().min(120),
});

type FormType = z.infer<typeof schema>;

export const AddPost = () => {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
 /*  const { mutate: addPost, isLoading } = useAddPost(); */

  const onSubmit = (data: FormType) => {
    console.log(data);
   /*  addPost(
      { ...data, userId: 1 },
      {
        onSuccess: () => {
          showMessage({
            message: 'Post added successfully',
            type: 'success',
          });
          // here you can navigate to the post list and refresh the list data
          //queryClient.invalidateQueries(usePosts.getKey());
        },
        onError: () => {
          showErrorMessage('Error adding post');
        },
      }
    ); */
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