import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../Themes';
import { Col } from '../Components/Grid.js';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './style';

const RootContainer = () => {

  return (
    <Col style={ styles.applicationView }>
      <StatusBar backgroundColor={ Colors.statusBar } barStyle='light-content' />
      <SafeAreaView style={ { backgroundColor: Colors.statusBar } } />
      <AppNavigation />
    </Col>
  );
};

export default RootContainer;
