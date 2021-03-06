import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './Login';
import Loader from './Loader';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC14FJeGJYhEm8XIZB544xjkVotUwcdjkI",
      authDomain: "espaifp-e71ab.firebaseapp.com",
      databaseURL: "https://espaifp-e71ab.firebaseio.com",
      projectId: "espaifp-e71ab",
      storageBucket: "espaifp-e71ab.appspot.com",
      messagingSenderId: "153299311006"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false  });
      }
    })
  }

  renderIntialView() {
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />;
      case false:
        return <View style={styles.container}><Login /></View>;
      default:
        return <View style={styles.container}><Loader size="large" /></View>;
    }
  }

  render() {
    return (
      <Provider store={store}>
        
          {this.renderIntialView()}
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
