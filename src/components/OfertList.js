import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import OfertItem from './OfertItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
   title : {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
class OfertList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Ofertas',
    tabBarIcon: ({ tintColor }) => (

      <Icon
        name={'work'}
        size={40}
        style={[{ color: tintColor }, styles.icon]}
      />
    )
  }
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.people);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ofertas de mi gremio</Text>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <OfertItem people={rowData} />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(OfertList);
