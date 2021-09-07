import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detail from './components/detail';
import Edit from './components/edit';
import MovieList from './components/list';

const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
  Detail: {screen: Detail},
  Edit: {screen: Edit},
})

const App = createAppContainer(AppNavigator)

export default App