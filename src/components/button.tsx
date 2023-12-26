import React from 'react';
import {Text,ActivityIndicator,TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';





interface Props extends TouchableOpacityProps {
  label?: string;
  loading?: boolean;
}

export const Button = ({
  label,
  loading = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={{height:48,marginTop:10,justifyContent:'center',alignItems:'center', backgroundColor:'black',borderRadius:8}} 
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          
        />
      ) : (
        <Text
          style={{color:'white'}}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
