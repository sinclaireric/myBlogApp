import { useRoute } from '@react-navigation/native';
import * as React from 'react';

/* import { usePost } from '../../api';
 */import type { RouteProp } from '../../navigation/types';
import { ActivityIndicator, Text, View } from 'react-native';

export const Post = () => {
  const { params } = useRoute<RouteProp<'Post'>>();
/*   const { data, isLoading, isError } = usePost({
    variables: { id: params.id },
  }); */

/*   if (isLoading) {
    return (
      <View className="flex-1  justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        
        <Text>
          Error loading post
        </Text>
      </View>
    );
  }
 */
  return (
    <View>

   {/*    <Text>{data.title}</Text>
      <Text>{data.body}</Text> */}
    </View>
  );
};
