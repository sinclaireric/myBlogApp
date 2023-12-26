import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Post } from '../../api';
import { usePosts } from '../../api';
import { Text, View } from 'react-native';

import { Card } from './card';

export const Feed = () => {
/*   const { data, isLoading, isError } = usePosts(); */
  const { navigate } = useNavigation();

  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => (
      <Card {...item} onPress={() => navigate('Post', { id: item.id })} />
    ),
    [navigate]
  );

  /* if (isError) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  } */
  return (
    <View >
     
      <FlashList
        data={[]}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<Text>Vide</Text>}
        estimatedItemSize={300}
      />
    </View>
  );
};
