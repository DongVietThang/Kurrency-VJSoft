import { createStackNavigator } from 'react-navigation';

import GetStarted from '../screens/GetStarted';
import Main from '../screens/Main';

export default createStackNavigator({
    GetStarted: {
        screen: GetStarted,
        navigationOptions: 
            {
                header: null
            }
    },
    Main: {
        screen: Main,
        navigationOptions: 
            {
                header: null
            }
    }
})