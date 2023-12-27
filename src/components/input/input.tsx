import * as React from 'react';
import { Image, TextInput, TextInputProps ,Text,View} from 'react-native';
import { StyleSheet } from 'react-native';





export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

 

  return (
    <View >
      <TextInput
        testID="STextInput"
        ref={ref}
        placeholder={label}
        placeholderTextColor={'#A1A5C1'}
        style={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
     
      />
   

      {error && <Text style={{color:'red',fontSize:10,marginTop:-10,marginBottom:12,}} >{error}</Text>}
    </View>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    fontSize: 12,
    borderWidth:1,
    marginBottom:12,
    paddingHorizontal:8,
    borderColor:'#cccccc',
    borderRadius:4,
    width:'100%',
    paddingVertical:8
  }
 
});