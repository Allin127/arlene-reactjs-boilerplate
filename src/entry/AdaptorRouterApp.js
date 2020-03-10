import React, { Component } from 'react';
import { View, Text, Button, Image, requireNativeComponent } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RouterHelper } from './RouterHelper'
/**
 * react-navigation和react-router的适配demo
 */

const ModuleStack = createStackNavigator();
function ModuleStackComponent(props) {
    return (
        <ModuleStack.Navigator {...props} screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#ffff00',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerBackImage: () => {
                return <Image source={require('../assets/close-light.png')} style={{ width: 25, height: 25, padding: 10 }}>
                </Image>
            }
        }}>
            <ModuleStack.Screen name="/Settings" component={SettingsScreen}
                options={{
                    // title:"", 造成样式混乱
                    headerTitle: () => (<Text>Settings</Text>),
                    headerStyle: {
                        backgroundColor: 'blue'
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        color: "red"
                    }
                }} />
            <ModuleStack.Screen name="/Details" component={DetailsScreen} options={{
                headerTitle: function () {
                    return <Text>Details</Text>
                }
            }} initialParams={{ itemId: 88 }} />
            <ModuleStack.Screen name="/"
                component={HomeScreen}
                options={{
                    header: () => null,
                    headerTitle: () => (<Text>Center</Text>),
                    headerRight: () => (
                        <Text
                            onPress={() => alert('This is right!')}
                            style={{ color: 'white' }}>Right</Text>),
                    headerLeft: () => (
                        <Text
                            onPress={() => alert('This is left!')}
                            style={{ color: 'white' }}>Left</Text>
                    )
                }}
                initialParams={{ itemId: 42 }}
            />
        </ModuleStack.Navigator>
    );
}

const ModuleStack2 = createStackNavigator();
function ModuleStack2Component(props) {
    return (
        <ModuleStack2.Navigator {...props} screenOptions={{
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTintColor: '#ffff00',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerBackImage: () => {
                return <Image source={require('../assets/back-light.png')} style={{ width: 25, height: 25, marginLeft: 10 }}>
                </Image>
            }
        }}>
            <ModuleStack2.Screen name="/PSettings" component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        color: "red"
                    }
                }} />
            <ModuleStack2.Screen name="/PDetails" component={DetailsScreen} options={{
                title: "Details", headerTitle: function () {
                    return <Text>333333</Text>
                }
            }} initialParams={{ itemId: 88 }} />
            <ModuleStack2.Screen name="/PHome"
                component={HomeScreen}
                options={{
                    headerTitle: () => (<Text>PHome</Text>),
                    headerRight: () => (
                        <Text
                            onPress={() => alert('This is right!')}
                            style={{ color: 'white' }}>Right</Text>),
                    headerLeft: () => (
                        <Text
                            onPress={() => alert('This is left!')}
                            style={{ color: 'white' }}>Left</Text>
                    )
                }}
                initialParams={{ itemId: 42 }}
            />
        </ModuleStack2.Navigator>
    );
}

class HomeScreen extends React.Component {
    render() {
        // RouterHelper.setTitle(this, "HOME UPDATED")
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.push('/PSettings')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('/PDetails', { itemId: 99 })}
                />
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.push('/Settings')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('/Details', { itemId: 99 })}
                />
            </View>
        );
    }
}


class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        // RouterHelper.setTitle(this, "SettingsScreen UPDATED")
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => { this.props.navigation.goBack() }}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('/Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        console.log(this.props.route.params);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

const Stack = createStackNavigator();
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
            <NavigationContainer>
                {/* <Stack.Navigator headerMode="none" initialRouteName = "RootProfile" >
                    <Stack.Screen name="RootProfile" isRoot={true} component={()=><ModuleStack2Component initialRouteName = "/PHome"></ModuleStack2Component>} />
                    <Stack.Screen name="RootHome" isRoot={true} component={ModuleStackComponent} />
                </Stack.Navigator> */}
                <ModuleStack2Component  initialRouteName = "/PHome"/>
            </NavigationContainer>
        );
    }
}

export default App