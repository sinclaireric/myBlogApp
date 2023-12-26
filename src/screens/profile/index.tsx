import * as React from 'react';

import { useAuth } from '../../core';
import {  ScrollView, Text, View } from 'react-native';


export const Profile = () => {
  const signOut = useAuth.use.signOut();
    const iconColor ='#CCCCCC';
  return (
    <>

      <ScrollView>
        <View>
          <Text>
            'Mon compte'
          </Text>
         

        {/*   <View className="my-8">
            <ItemsContainer>
              <Item text="settings.logout" onPress={signOut} />
            </ItemsContainer>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};
