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
    flex: 1,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
    padding: 40,
  },
txt : {
color:'#aaaaaa',
fontWeight:"600"
},
  img: {
    height:70,
    width:70,
    borderRadius:70,
    backgroundColor:'#cccccc'
  }


 
});