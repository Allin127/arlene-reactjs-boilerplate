import React, { Component } from 'react';
import { View, Text, Button, Image, requireNativeComponent } from 'react-native'
import { RouterHelper } from 'ALUI-LFE/router/RouterHelper'



class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
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

class HomeScreen2 extends React.Component {
    render() {
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
                    title="跳转某一个栈RN（需要制定根，然后+子）"
                    onPress={() => this.props.navigation.navigate('/RootStack',{screen:'Home'})}
                />
                <Button
                    title="跳转某一个栈RJS"
                    onPress={() => this.props.navigation.navigate('/Details', { itemId: 99 })}
                />
            </View>
        );
    }
}


class SettingsScreen extends React.Component {
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




// const routeCfg =
// {
//     name:"/", /**当一个栈时候 ，这个必须是/ */
//     initialRouteName:"/Home",
//     screenOptions: {
//         headerStyle: {
//             backgroundColor: 'green',
//         },
//         headerTintColor: 'red',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => {
//             return <Image source={require('../assets/close-light.png')} style={{ width: 25, height: 25, padding: 10 }}>
//             </Image>
//         }
//     },
//     routes: [
//         {
//             name: "/Settings", component: SettingsScreen, options: {
//                 // title:"", 造成样式混乱
//                 headerTitle: () => (<Text>Settings</Text>),
//                 headerStyle: {
//                     backgroundColor: 'blue'
//                 },
//                 headerTintColor: 'black',
//                 headerTitleStyle: {
//                     fontWeight: 'normal',
//                     color: "red"
//                 }
//             }
//         },
//         {
//             name: "/Details", component: DetailsScreen, options: {
//                 // title:"", 造成样式混乱
//                 headerTitle: () => (<Text>Details</Text>),
//                 initialParams:{ itemId: 88 }
//             }
//         },
//         {
//             name: "/Home", component: HomeScreen, options: {
//                 header: () => null,
//                 headerTitle: () => (<Text>Center</Text>),
//                 headerRight: () => (
//                     <Text
//                         onPress={() => alert('This is right!')}
//                         style={{ color: 'white' }}>Right</Text>),
//                 headerLeft: () => (
//                     <Text
//                         onPress={() => alert('This is left!')}
//                         style={{ color: 'white' }}>Left</Text>
//                 )
//             }
//         }
//     ],
// }

const routeCfg =[[
{
    name:"/RootStack",
    initialRouteName:"/Home",
    screenOptions: {
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerBackImage: () => {
            return <Image source={require('../assets/close-light.png')} style={{ width: 25, height: 25, padding: 10 }}>
            </Image>
        }
    },
    routes: [
        {
            name: "/Settings", component: SettingsScreen, options: {
                // title:"", 造成样式混乱
                headerTitle: () => (<Text>Settings</Text>),
                headerStyle: {
                    backgroundColor: 'red'
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    color: "red"
                }
            }
        },
        {
            name: "/Details", component: DetailsScreen, options: {
                // title:"", 造成样式混乱
                headerTitle: () => (<Text>Details</Text>),
                initialParams:{ itemId: 88 }
            }
        },
        {
            name: "/Home", component: HomeScreen, options: {
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
            }
        }
    ],
},{
    name:"/RootProfile",
    initialRouteName:"/Phome",
    screenOptions: {
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerBackImage: () => {
            return <Image source={require('../assets/back-light.png')} style={{ width: 25, height: 25, padding: 10 }}>
            </Image>
        }
    },
    routes: [
        {
            name: "/PSettings", component: SettingsScreen, options: {
                // title:"", 造成样式混乱
                headerTitle: () => (<Text>Settings333333</Text>),
                headerStyle: {
                    backgroundColor: 'blue'
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    color: "red"
                }
            }
        },
        {
            name: "/PDetails", component: DetailsScreen, options: {
                // title:"", 造成样式混乱
                headerTitle: () => (<Text>Details</Text>),
                initialParams:{ itemId: 88 }
            }
        },
        {
            name: "/Phome", component: HomeScreen2, options: {
                // header: () => null,
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
            }
        }
    ],
}],{initialRouteName:"/RootProfile"}];

export default function(){
    return RouterHelper.renderConfig(routeCfg)
}
