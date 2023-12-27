import * as React from 'react';
import { useQuery } from '@apollo/client';

import {  StyleSheet, Text, View,StatusBar,Pressable, Image } from 'react-native';

import { GET_PROFILE } from '../api/profile/queries/profile';

export const UserCard = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  
 
  if (loading) return <Text>Chargement</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;
 
  return (
    <>
<StatusBar />
      
        <View style={styles.container}>
         
          <Image source={{
            uri:data?.me.avatar.url
          }} style={styles.img} />
          <Text style={styles.txt} >{data?.me.displayName}</Text>

        </View>
      
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
    padding: 4,
    marginBottom:10
  },
txt : {
fontWeight:"600"
},
  img: {
    height:40,
    width:40,
    borderRadius:40,
    backgroundColor:'#cccccc'
  }


 
});