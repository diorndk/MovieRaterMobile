import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovieList(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://192.168.0.6:8000/api/movies/', {
            method: 'GET',
            headers: {
                'Authorization':'Token 56c7b44f49cd42aa14d9e21a50072deb098b55f2'
            }
        }).then(res => res.json())
        .then(jsonRes => setMovies(jsonRes))
        .catch(error => console.log(error))
    }, [])

    const movieClicked = (movie) => {
        props.navigation.navigate("Detail", {movie: movie, title: movie.title})
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/MR_logo.png')}
                style={{width: '100%', height: 135, paddingTop: 30}} resizeMode="contain"/>
            <FlatList
                data = {movies}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={() => movieClicked(item)}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

MovieList.navigationOptions = screenProps => ({
    title: "Home",
    headerStyle: {
        backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    headerRight: () => <Button title="Add new" color="orange" onPress={() => screenProps.navigation.navigate("Edit", {movie: {title: '', description: ''}})} />
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
