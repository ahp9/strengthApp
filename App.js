import Index from './scr/Pages/Index.js';
import Login from './scr/Pages/Login.js';
import Register from './scr/Pages/Register.js';
import HomePage from './scr/Pages/HomePage.js';
import GuidePage from './scr/Pages/GuidePage.js';
import WorkoutPage from './scr/Pages/WorkoutPage.js';
import ListPage from './scr/Pages/ListPage.js';
import GuideHome from './scr/Pages/GuideHome.js';
import WorkoutHome from './scr/Pages/WorkoutHome.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="GuidePage" component={GuidePage}/>
        <Stack.Screen name="WorkoutPage" component={WorkoutPage}/>
        <Stack.Screen name='ListPage' component={ListPage}/>
        <Stack.Screen name="GuideHome" component={GuideHome}/>
        <Stack.Screen name="WorkoutHome" component={WorkoutHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

