import React from 'react';

import type { Post } from '../api/articles/types';
import { Image, Pressable, Text, View,StyleSheet } from 'react-native';

type Props = Post & { onPress?: () => void };

export const Card = ({ textContent, authorV2,publishedAt, onPress = () => {} }: Props) => {
  return (
    <Pressable
      
      onPress={onPress}
    >
     

      <View style={styles.card}>
        <Text style={styles.content}>
          {textContent}
        </Text>
        <Text style={styles.sub}>
          {authorV2.displayName}
        </Text>
        <Text style={styles.sub}>
          {publishedAt}
        </Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  card: {
    borderWidth:1,
    marginBottom:20,
    borderColor:'#cccccc',
    padding: 15,
    borderRadius:8
  },
  content:{
    fontSize:16
  },

  sub:{
    fontSize:10
  }

})