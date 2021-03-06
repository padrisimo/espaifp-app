import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
  .withText('Accede')
  .withBackgroundColor(MKColor.Green)
  .build();

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSucces)
      .catch(this.onAuthFailed)
  }

  onAuthSucces = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onAuthFailed = () => {
    this.setState({
      error: 'Error, prueba otra vez.',
      loading: false
    })
  }

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader size="large" />
    } else {
      return <LoginButton onPress={this.onButtonPress} />
    }
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return (
      <View style={form}>
        <Image
        style={{ height: 82, marginBottom: 50}}
          source={{uri: '/Users/adrianfernandezchamizo/projects/espaifp-app/src/images/espai.png'}}
        />
        <Text>
          Accede a tu cuenta
        </Text>
        <MKTextField
          text={this.state.email}
          onTextChange={email => this.setState({ email })}
          textInputStyle={fieldStyles}
          placeholder={'Email...'}
          tintColor={MKColor.Green}
        />
        <MKTextField
          text={this.state.password}
          onTextChange={password => this.setState({ password })}
          textInputStyle={fieldStyles}
          placeholder={'contraseña...'}
          tintColor={MKColor.Green}
          password={true}
        />
        <Text style={errorMessage}>
          {this.state.error}
        </Text>
        <View style={loginButtonArea}>
          {this.renderLoader()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingBottom: 10,
    width: 200
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
    width: 200
  },
  loginButtonArea: {
    marginTop: 20
  },
  errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: MKColor.Red,
    alignSelf: 'center'
  }
});
