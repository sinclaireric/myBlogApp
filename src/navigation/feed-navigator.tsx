import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { AddPost, Feed, Post } from '../screens';
import { Pressable, Text } from 'react-native';

export type FeedStackParamList = {
  Feed: undefined;
  Post: { id: sting };
  AddPost: undefined;
};

const Stack = createNativeStackNavigator<FeedStackParamList>();

const GoToAddPost = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate('AddPost')}>
      <Text >Ajouter un article</Text>
    </Pressable>
  );
};

export const PostNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerRight: () => <GoToAddPost />,
        }}
      >
        <Stack.Screen name="Feed" component={Feed} options={({ route }) => ({ title: 'Articles' })} />
        <Stack.Screen name="Post" component={Post} options={({ route }) => ({ title: 'Article' })} />
      </Stack.Group>

      <Stack.Screen name="AddPost"  component={AddPost} options={({ route }) => ({ title: 'Ajouter un article' })} />
    </Stack.Navigator>
  );
};
