import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function MovieList() {

    const [movies, setMovies] = useState([{title: 'Rambo'}, {title: 'Predator'}])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/movies/', {
            method: 'GET',
            headers: {
                'Authorization':'Token 56c7b44f49cd42aa14d9e21a50072deb098b55f2'
            }
        }).then(res => res.json())
        .then(jsonRes => setMovies(jsonRes))
        .catch(error => console.log(error))
    })

    return (
        <View style={styles.container}>
            <FlatList
                data = {movies}
                renderItem = {({item}) => (
                    <Text>{item.title}</Text>
                )} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
