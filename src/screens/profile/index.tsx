import * as React from 'react';
import { useQuery } from '@apollo/client';

import { useAuth } from '../../core';
import {  StyleSheet, Text, View,StatusBar,Pressable, Image, ActivityIndicator } from 'react-native';

import { GET_PROFILE } from '../../api/profile/queries/profile';
import { UserCard } from '../../components/userCard';

export const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  const signOut = useAuth.use.signOut();
  
 
  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>`Error! ${error.message}`</Text>;
 
  return (
    <>
        <StatusBar />
      
        <View style={styles.container}>
         
          <UserCard />

          <Pressable style={styles.logoutView} onPress={signOut}>
              <Text style={styles.logoutText}>Deconnexion</Text>  
          </Pressable>
         
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
  text: {
    marginBottom:40,
    borderColor:'#cccccc',
    borderRadius:4,
    width:'100%',
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

  img: {
    height:70,
    width:70,
    borderRadius:70,
    backgroundColor:'#cccccc'
  }


 
});