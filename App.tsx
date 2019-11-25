import React from 'react';
import { Alert, Button, Image, Picker, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <Text>Now you can develop</Text>
      <Image
        style={styles.image}
        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('This is the Button')}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  }
});
