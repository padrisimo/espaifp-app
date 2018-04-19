import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 25
  },
  name: {
    fontSize: 30
  },
  profesion:{
    fontSize: 20,
    color: '#1db954',
    marginBottom: 10,
  },
  text: {
    marginHorizontal: 25,
    fontSize: 16,
  },
  line:{
    color: 'grey',
    fontSize: 18,
  }
});

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'user'}
        size={50}
        style={{ color: tintColor }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola Pepita!</Text>
        <View style={styles.card}>
          <Icon
            name={'user'}
            size={150}
            style={{ color: 'grey', marginTop: 25 }}
          />
        </View>
        <Text style={styles.name}>Pepita Pérez</Text>
        <Text style={styles.profesion}>Pintora</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam magni expedita odio error illum sit dicta, voluptate ullam quae cum voluptatibus praesentium repellendus neque. Soluta fugit laborum ratione odio!</Text>
        <Text style={[styles.line, {marginTop: 25}]}>Dinero ganado este mes: 860 €</Text>
        <Text style={styles.line}>Trabajos Realizados: 14</Text>
      </View>
    )
  }
}



export default Profile;