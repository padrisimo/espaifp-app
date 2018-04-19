import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10
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
        <Text>Mi Perfil</Text>
      </View>
    )
  }
}



export default Profile;