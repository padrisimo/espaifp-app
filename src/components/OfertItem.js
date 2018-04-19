import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../actions';

const theme = getTheme();

const OfertItem = props => {
  return (
    <View style={[theme.cardStyle, styles.card]}>
      <Image
        source={{uri: '/Users/adrianfernandezchamizo/projects/espaifp-app/src/images/pintura.jpg'}} 
        style={[theme.cardImageStyle, styles.image]} />
      <Icon name={'brush'} size={80} style={styles.icon} />
      <Text style={[theme.cardTitleStyle, styles.title]}>Pintura</Text>
      <Text style={[theme.cardActionStyle, styles.action]}>{props.people.barrio} ( {props.people.horas} h )</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  image: {
    height: 100
  },
  action: {
    backgroundColor: 'black',
    color: 'white'
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)'
  }
});

export default connect(null, actions)(OfertItem);
