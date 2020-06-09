import { createStackNavigator } from '@react-navigation/stack';
import React from '../common/pages/node_modules/react';
import { NavigationContainer } from '@react-navigation/native';
const RouterHelper = {
    setTitle: function (target,title) {
        target.props.navigation.setOptions({title});
    },
    renderConfig:(cfgs)=>{
        //配置里第一个是stack集合，第二个是参数，所以长度必须是2，要不就是一个对象，只渲染一个stack
        if(cfgs&&cfgs.length==2){
            // 如果是多个，要循环处理铺开
            let stacksConfig =  cfgs[0];
            let stackOption = cfgs[1];
            let Stack = createStackNavigator();
            let retStacks = stacksConfig.reduce((prev,curr,index) => {
                const {name}=curr;
                prev.push(<Stack.Screen name={name}>{()=>_renderOneStack(curr,index)}</Stack.Screen>);
                return prev; 
            },[])
            const {initialRouteName,...props} =  stackOption;
            return (
                <NavigationContainer>
                    <Stack.Navigator  headerMode="none" initialRouteName={initialRouteName} key="AppRoot" {...props}>
                        {retStacks}
                    </Stack.Navigator>
                </NavigationContainer>
                )
        }else{
            return <NavigationContainer>{_renderOneStack(cfgs,0)}</NavigationContainer>;
        }
    }
}

function _renderOneStack(stackConfig,idx){
    console.log("_renderOneStack",idx);
    let Stack = createStackNavigator();
    const {routes,...props} = stackConfig;
    return (
    <Stack.Navigator key={idx} {...props}>
        {_renderRoutes(routes,Stack)}
    </Stack.Navigator>
    )
}

function _renderRoutes(routersConfig,Stack){
    console.log("_renderRoutes");
   return routersConfig.reduce((prev,curr,index) => {
        prev.push(<Stack.Screen key={index} {...curr}></Stack.Screen>);
        return prev;
    },[]);
}

export  {RouterHelper};