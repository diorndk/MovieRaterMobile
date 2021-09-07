import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function Edit(props) {

    const movie = props.navigation.getParam("movie", null)
    const [title, setTitle] = useState(movie.title)
    const [description, setDescription] = useState(movie.description)

    const saveMovie = () => {
        fetch(`http://192.168.0.6:8000/api/movies/${movie.id}/`, {
            method: 'PUT',
            headers: {
                'Authorization':'Token 56c7b44f49cd42aa14d9e21a50072deb098b55f2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description})
        }).then(res => res.json())
        .then(movie => {
            props.navigation.navigate("Detail", {movie: movie, title: movie.title})
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input} 
                placeholder="Title"
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input} 
                placeholder="Description"
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <Button onPress={() => saveMovie()} title="Save" />
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
  label: {
    fontSize: 24,
    color: 'white',
    padding: 10
  },
  starContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
  },
  input: {
      fontSize: 24,
      backgroundColor: '#fff',
      padding: 10,
      margin: 10
  }
});
