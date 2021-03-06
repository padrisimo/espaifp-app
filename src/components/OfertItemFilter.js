import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../actions';

const theme = getTheme();

const OfertItem = props => {
  return (
    <TouchableHighlight
      onPress={() => {
        alert('Aquí aparecerá una pantalla con los detalles de la oferta donde te podrás inscribir')
      }}>
      <View style={[theme.cardStyle, styles.card]}>
        <Image
          source={{ uri: '/Users/adrianfernandezchamizo/projects/espaifp-app/src/images/stage.jpeg' }}
          style={[theme.cardImageStyle, styles.image]} />
        <Icon name={'build'} size={80} style={styles.icon} />
        <Text style={[theme.cardTitleStyle, styles.title]}>Montaje (stage)</Text>
        <Text style={[theme.cardActionStyle, styles.action]}>{props.people.barrio} ( {props.people.horas} h )</Text>
      </View>
    </TouchableHighlight>
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
    color: 'white'
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
    left: 4,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)'
  }
});

export default connect(null, actions)(OfertItem);
