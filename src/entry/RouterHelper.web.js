import {BrowserRouter, Switch,Route, Redirect } from 'react-router-dom'
import React from '../common/pages/node_modules/react';
import {ALPage} from 'ALUI-WEB'
const RouterHelper = {
    setTitle: function (target, title) {
        target.props.setTitle(title);
    },
    renderConfig: (cfgs) => {
        //配置里第一个是stack集合，第二个是参数，所以长度必须是2，要不就是一个对象，只渲染一个stack
        if (cfgs && cfgs.length == 2) {
            // 如果是多个，要循环处理铺开
            let stacksConfig = cfgs[0];
            let stackOption = cfgs[1];
            let retStacks = stacksConfig.reduce((prev, curr, index) => {
                prev.push(_renderOneStack(curr, index));
                return prev;
            }, [])
            const { initialRouteName, ...props } = stackOption;
            if(initialRouteName) retStacks.push(<Redirect from={"/"} key='nav-direct' to={initialRouteName} />);
            console.log(retStacks);
            return <BrowserRouter>{retStacks}</BrowserRouter>;
        } else {
            return <BrowserRouter>{_renderOneStack(cfgs, 0)}</BrowserRouter>;
        }
    }
}



function _renderOneStack(stackConfig, idx) {
    const { routes, initialRouteName, ...props } = stackConfig;
    console.log(props.name);
    return (
        <Switch data-lfe-name="Stack.Navigator.web" >
            {_renderRoutes(routes, props)}
            
            {initialRouteName && <Redirect from={props.name || "/"} to={initialRouteName} />}
        </Switch>
    )
}

function _renderRoutes(routersConfig, parentProps) {
    console.log("_renderRoutes");
    let output = routersConfig.reduce((prev, curr, index) => {
        // screenOptions的处理
        let { screenOptions } = parentProps;
        let { component, name, initialParams, ...otherProps } = curr;

        let PageComponent = withPage(component, screenOptions);
        let pageOptions = Adaptor.screenOptions(screenOptions, otherProps && otherProps.options);
        
        prev.push(<Route key="index" path={name} {...otherProps} >{(props) => {
            let { location: { state }, ..._otherProps } = props;
            let route = { params: Object.assign({}, initialParams || {}, state || {}) };
            return <PageComponent {..._otherProps} {...pageOptions} route={route}></PageComponent>
        }}</Route>);
        return prev;
    }, []);
    return output;
}


export { RouterHelper };


let withPage = (WrappedComponent, screenOptions) => {
    return class extends ALPage {
        renderContent() {
            let { history, route } = this.props;
            Adaptor.navigation.call(this, history);
            return <WrappedComponent data-lfe-name="ArlenePage.web" setTitle={this.setTitle} {...screenOptions} navigation={history} route={route} />
        }
        render() {
            return (
                super.render()
            )
        }
    };
}

const Adaptor = {
    navigation: function (_history) {
        //navigation对应history的接口转换
        //navigate类似push,但在RN端不会每次都创建一个新的push,先会看有没有，有了就不创建，通常可以阻止连续点击问题
        _history.navigate = _history.push;
        //替换当前screen,返回则不会返回上一页
        _history.reset = _history.replace;
        return _history;
    },

    screenOptions: function (screenOptions, childOptions) {
        //Stack.Navigator的screenOptions可以对包含的子元素(Stack.Screen)全部设置默认的头部样式
        //Title可以是function和text  
        let _options = (childOptions) ? { Title: (childOptions.headerTitle && typeof childOptions.headerTitle == "function") ? childOptions.headerTitle : childOptions.title } : {};
        _options = Object.assign({}, screenOptions, childOptions, _options);
        return _options;
    },

}
