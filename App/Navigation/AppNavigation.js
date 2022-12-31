import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { APP_SCREENS } from '../Constants/ScreensName';
import DetailScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
import styles from './AppNavigationStyle';

/* ------ Manifest of possible screens ----- */

const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  DetailScreen: { screen: DetailScreen }
}, {

  /* ------ Default config for all screens  ----- */
  headerMode: 'none',
  initialRouteName: APP_SCREENS.HOME,
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav);
