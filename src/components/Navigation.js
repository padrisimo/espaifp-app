import { StackNavigator, TabNavigator } from 'react-navigation';
import Profile from './Profile';
import OfertList from './OfertList';
import FilterList from './FilterList';

const Navigation = TabNavigator({
  OfertList: { screen: OfertList },
  FilterList: { screen: FilterList },
  Profile: { screen: Profile }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#bdf5d0',
    swipeEnabled: true,
    showLabel: false,
    style: {
      backgroundColor: '#1db954'
    }
  }
});

export default Navigation;