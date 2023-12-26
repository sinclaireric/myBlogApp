import * as React from 'react';

import { useAuth } from '../../core';
import {  StyleSheet, Text, View,StatusBar,Pressable } from 'react-native';


export const Profile = () => {
  const signOut = useAuth.use.signOut();

  return (
    <>
<StatusBar />
      
        <View style={styles.container}>
         
          
          <View style={styles.img} />
          <Text>
            Maneng Sinclair
          </Text>

          <Text>
            0 articles
          </Text>

          
            <Pressable style={styles.logoutView} onPress={signOut}>
              <Text style={styles.logoutText}> Deconnexion </Text>  
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
    height:90,
    width:90,
    borderRadius:90,
    backgroundColor:'#cccccc'
  }


 
});