import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function Detail(props) {

    const movie = props.navigation.getParam("movie", null)

    return (
        <View style={styles.container}>
            <View style={styles.starContainer}>
                <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white} icon={faStar}/>
                <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white} icon={faStar}/>
                <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white} icon={faStar}/>
                <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white} icon={faStar}/>
                <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white} icon={faStar}/>
                <Text style={styles.white}>({movie.no_of_ratings})</Text>
            </View>
            <Text style={styles.description}>{movie.description}</Text>
        </View>
    );
}

Detail.navigationOptions = screenProps => ({
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
  item: {
      flex: 1,
      padding: 10,
      height: 50,
      backgroundColor: '#282C35'
  },
  itemText: {
      color: '#fff',
      fontSize: 24
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
  },
  orange: {
      color: 'orange'
  },
  white: {
      color: 'white'
  }
});
