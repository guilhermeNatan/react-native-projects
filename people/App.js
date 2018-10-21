import { createStackNavigator } from 'react-navigation';
import { capitalizeFirstLatter } from './src/util';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

export default createStackNavigator({
  Main: {
    screen: PeoplePage,
  },
  PeopleDetail: {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => (
      {
        title: capitalizeFirstLatter(navigation.state.params.pessoa.name.first),
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
      }

    ),
  },
},
{
  navigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#6ca2f7',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      alignSelf: 'center',
    },
  },
});
