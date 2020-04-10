import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Links from 'screens/Links';
import ListPlan from 'screens/ListPlan';
import SignIn from 'screens/SignIn';
import Search from 'screens/Search';
import FoodDetail from 'screens/FoodDetail';
import CreatePlan from 'screens/CreatePlan';
import Settings from 'screens/Setting';
import EditProfile from 'screens/EditProfile';
import PlanDetails from 'screens/PlanDetails';
import AuthLoading from 'screens/AuthLoading';
import Main from './MainTabNavigator';

const AppStack = createStackNavigator(
  {
    Main,
    Links,
    Search,
    ListPlan,
    Settings,
    CreatePlan,
    FoodDetail,
    EditProfile,
    PlanDetails,
  },
  {
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: createStackNavigator({ SignIn }),
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitch);