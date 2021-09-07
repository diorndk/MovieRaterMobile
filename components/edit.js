import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Edit(props) {

    const movie = props.navigation.getParam("movie", null)

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Edit {movie.title}</Text>
        </View>
    );
}

Edit.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam('title'),
    headerStyle: {
        backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 10
  },
  description: {
    fontSize: 20,
    color: 'white',
    padding: 10
  },
  starContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
  }
});
