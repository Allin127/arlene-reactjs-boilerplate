import React from 'react';
import { Button, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('/Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('/Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('/Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('/Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const ModuleStack = createStackNavigator();

function ModuleStackComponent() {
  return (
    <ModuleStack.Navigator initialRouteName="/Details">
      <ModuleStack.Screen name="/Home" component={HomeScreen} />
      <ModuleStack.Screen name="/Settings" component={SettingsScreen} />
      <ModuleStack.Screen name="/Details" component={DetailsScreen} />
    </ModuleStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ModuleStackComponent />
    </NavigationContainer>
  );
}





