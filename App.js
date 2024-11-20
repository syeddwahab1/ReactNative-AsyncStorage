/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const setData = async () => {
    await AsyncStorage.setItem('name', 'john');
  };
  const getData = async () => {
const name = await AsyncStorage.getItem('name');
  };
  return (
    <View >
      <Text style={{fontSize: 40}}>AsyncStorage with ReactNative</Text>
      <Button title="Save Data" onPress={setData}/>
      <Button title="Get Data" onPress={getData}/>
    </View>
  );
};
export default App;
