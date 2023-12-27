import { useRoute } from '@react-navigation/native';
import * as React from 'react';


import { GET_ARTICLE } from '../../api/articles/queries/articles'

import type { RouteProp } from '../../navigation/types';
import { ActivityIndicator, Text, View,StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';

export const Post = () => {
  const { params } = useRoute<RouteProp<'Post'>>();


  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLE, {
    variables: {
      input:{id:params.id}
    },
  });

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
   
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
          {data.post.textContent}fhjhj
        </Text>
        <Text style={styles.sub}>
          {data.post.authorV2.displayName}
        </Text>
        
        <Text style={styles.sub}>
          {data.post.publishedAt}
        </Text>
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

  sub:{
    fontSize:10
  }

});