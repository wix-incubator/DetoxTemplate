import React, {Component} from 'react';
import {Text, View, TextInput, NativeModules} from 'react-native';

const {CrashModule} = NativeModules;
export default class ExampleScreen extends Component {

  constructor(props) {
    super(props);
    CrashModule.crashNow();
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 80, marginHorizontal: 20}}>
        <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10}}>
          Example Screen
        </Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, marginHorizontal: 20, padding: 5, borderRadius: 10, }}
          testID='ExampleTextInputId'
        />
      </View>
    );
  }
}