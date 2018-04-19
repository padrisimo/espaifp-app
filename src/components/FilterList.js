import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OfertItemFilter from './OfertItemFilter';

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

class FilterList extends Component {
  static navigationOptions = {
      tabBarLabel: 'Filerted',
      tabBarIcon: ({ tintColor }) => (

        <Icon
          name={'public'}
          size={40}
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
      <Text style={styles.title}>Últimas Ofertas</Text>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) => 
            <OfertItemFilter people={rowData} />
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