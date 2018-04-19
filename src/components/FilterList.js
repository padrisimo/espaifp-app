import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  }
});

class FilterList extends Component {
  static navigationOptions = {
      tabBarLabel: 'Filerted',
      tabBarIcon: ({ tintColor }) => (

        <Icon
          name={'eye'}
          size={60}
          style={{ color: tintColor }}
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
      <Text>Lista de Ofertas</Text>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) => 
            <PeopleItem people={rowData} />
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


export default connect(mapStateToProps)(FilterList);