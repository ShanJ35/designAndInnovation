import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Button, Slider} from 'react-native';
import MapView from 'react-native-maps';
import {RkButton, RkTheme} from 'react-native-ui-kitten';
import {StackNavigator,} from 'react-navigation';



let accent = '#ed1c4d';

RkTheme.setType('RkButton', 'dark', {
  container: {
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  content: {
    color: 'white'
  }
});

class HomeScreen extends Component {
  constructor() {
    super();
    this.state ={
      SliderValue : 0
    }
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.heading}> How much time are you looking to blow? </Text>
        <Text style={{fontSize: 15}}> {this.state.SliderValue} hours</Text>
        <Slider style={{width: 350, height: 30}}
        step = {0.5}
        maximumValue = {10}
        minimumTrackTintColor = '#009688'
        minimumValue = {0}
        maximumTrackTintColor = 'brown'
        onValueChange={(ChangedValue) =>
          this.setState({SliderValue: ChangedValue})}
        margin = {10}
        />
         <Button
          style={styles.button}
          onPress={() =>
            navigate('Maps')}
         title="Bring forth the maps of old ye filthy pirate scum!!"/>

        </View>
    );
  }
}

let { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 650,
    width: 420,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
  button: {
    borderTopWidth: 250,
    borderTopColor: 'rgba(255, 255, 255, 0.0)',
  },
  heading: {
    fontSize: 20,
    borderBottomWidth: 100,
    borderBottomColor: 'rgba(255, 255, 255, 0.0)',
  },
  
});
export {HomeScreen};
