import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { showErrorMessage} from '../../components';


import { GET_ARTICLE} from '../../api/articles/queries/articles'
import { DELETE_ARTICLE } from '../../api/articles/mutations/article'

import type { RouteProp } from '../../navigation/types';
import { ActivityIndicator, Text, View,StyleSheet, Pressable } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
export const Post = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<'Post'>>();


  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLE, {
    variables: {
      input:{id:params.id}
    },
  });

  const [deleteArticle, { data:dataDelete, loading:loadingDelete, error:errorDelete }] = useMutation(DELETE_ARTICLE, {
    variables: {
      input:{id:params.id}
    },
  });



  const onDelete = () => {


    deleteArticle()
    .then(() => {
      // set token if credentials is ok
      
      showMessage({
        message: 'Post deleted successfully',
        type: 'success',
      });

      navigate('Feed')
      

    })
        
    .catch((error) => {
      // get mutations errors
      console.error('Erreur lors de la mutation :', error);
      showErrorMessage('Error delete post');
    });

    
  };


  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
   console.log(error)
    return (
      <View >

        <Text style={styles.sub}>
          Erreur lors du chargement
        </Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>

<Text style={styles.content}>
          {data.post.textContent}
        </Text>
        <Text style={styles.sub}>
          {data.post.authorV2.displayName}
        </Text>
        
        <Text style={styles.sub}>
          {data.post.publishedAt}
        </Text>

{data.post.capabilities.delete  && 
        <Pressable style={styles.logoutView} onPress={onDelete} >
              <Text style={styles.logoutText}>Supprimer</Text>  
          </Pressable>
        }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  
    padding: 20,
  },

 
  content:{
    fontSize:16,
    marginBottom:20
  },
  logoutView: {
    marginTop:40,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'red',
    borderWidth:1,
    borderRadius:4,
    width:'100%',
  },
  logoutText: {
    
    color:'red',
    borderRadius:4,
    
  },

  sub:{
    fontSize:10
  }

});