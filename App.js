import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Authenticate/Login';
import Register from './src/pages/Authenticate/Register';
import Feed from './src/pages/Feed';
import Likes from './src/pages/FeedScreens/Likes';
import Comments from './src/pages/FeedScreens/Comments';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register}
            options={{
              title: 'Cadastro',
            }}
          />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Likes" component={Likes}
            options={{
              title: 'Curtidas',
            }}
          />
          <Stack.Screen name="Comments" component={Comments}
		        options={{
			        title: 'Comentários',
		        }}
		      />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


