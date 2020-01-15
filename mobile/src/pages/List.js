import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, AsyncStorage, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';

import api from '../services/api';
import SpostList from '../components/SpostList'

import logo from '../assets/logo.png';

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim())

      setTechs(techsArray)
    })
  }, []);

  async function deslogar(){
    await AsyncStorage.setItem('user', '');
    navigation.navigate('Login')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.img}
        source={logo}/>

      <ScrollView>
        {techs.map( tech => <SpostList key={tech} tech={tech} />)}

        <TouchableOpacity
          onPress={deslogar}
          style={styles.deslogarButton}>
            <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
  deslogarButton: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
});
