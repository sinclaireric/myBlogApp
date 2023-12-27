import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { useAuth } from '../../core';
import {  StyleSheet, Text, View,StatusBar,Pressable, Image, ActivityIndicator } from 'react-native';
import { LOGOUT } from '../../api/auth/mutations/logout';
import { GET_PROFILE } from '../../api/profile/queries/profile';
import { UserCard } from '../../components/userCard';

export const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  const [logout, { data:dataLogOut, loading:loadingLogOut, error:errorLogOut }] = useMutation(LOGOUT);
  const signOut = useAuth.use.signOut();



  const onLogout = () => {


    logout()
    .then((response) => {
      // set token if credentials is ok
      signOut();

    })
        
    .catch((error) => {
      // get mutations errors
      console.error('Erreur lors de la mutation :', error);
    });

    
  };
  
 
  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>`Error! ${error.message}`</Text>;
 
  return (
    <>
        <StatusBar />
      
        <View style={styles.container}>
         
          <UserCard />

          <Pressable style={styles.logoutView} onPress={onLogout}>
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