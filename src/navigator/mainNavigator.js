import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile187417Navigator from '../features/UserProfile187417/navigator';
import Settings187416Navigator from '../features/Settings187416/navigator';
import Settings187414Navigator from '../features/Settings187414/navigator';
import SignIn2187412Navigator from '../features/SignIn2187412/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile187417: { screen: UserProfile187417Navigator },
Settings187416: { screen: Settings187416Navigator },
Settings187414: { screen: Settings187414Navigator },
SignIn2187412: { screen: SignIn2187412Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
