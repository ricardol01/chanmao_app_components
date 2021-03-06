/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import InfoPage from './intro/infoPage'
import OrderConfirm from './order/orderConfirm'
export default class cmInfo extends Component {
  render() {
    return (
      <NavigatorIOS

        style={{
          flex:1
        }}
        initialRoute={{
          component: OrderConfirm ,
          title:'订单确认',

        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cmInfo', () => cmInfo);
