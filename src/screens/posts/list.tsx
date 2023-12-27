import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../api/articles/queries/articles'

import { Text, View,StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';

import { Card } from '../../components';
import { UserCard } from '../../components/userCard';
import { Post } from '../../api/articles/types';

export const Feed = () => {

const [currentPage, setCurrentPage] = useState(1);
  const limit = 2; // Nombre d'articles par page

  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLES, {
    variables: {
      pagination:{
      offset: currentPage,
      limit
    },
    order:'DESC'
    },
  });

  const { navigate } = useNavigation();


  const renderItem = React.useCallback(
    ({ item}: { item: Post }) => (
      <Card {...item} onPress={() => navigate('Post', { id: item.id })} />
    ),
    [navigate]
  )



  const loadNextPage = () => {
    fetchMore({
      variables: {
        offset: currentPage + 1,
      },
    }).then(() => {
      setCurrentPage(currentPage + 1);
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Erreur de chargement des articles...</Text>;
  }


  


   if (error) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  } 
  return (

    <View style={styles.container}>
     <UserCard />
     <View style={{flex:1}}>

     
      <FlashList
        data={data.posts.data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<Text>Vide</Text>}
        estimatedItemSize={300}
        ListFooterComponent={() => {
          return loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <TouchableOpacity onPress={loadNextPage}>
              <Text style={{ textAlign: 'center', padding: 10 }}>Page suivante</Text>
            </TouchableOpacity>
          );
        }}
      />
      </View>
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