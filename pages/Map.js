import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import MapView from 'react-native-maps';
import {RkButton, RkTheme} from 'react-native-ui-kitten';
import {NavigationActions} from 'react-navigation';


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

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style ={styles.container}>
          <MapView
              style={styles.map}
              region={{
            latitude: 24.523687,
            longitude: 54.4345191,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
          </MapView>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
  button: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  
});

export {MapScreen};
