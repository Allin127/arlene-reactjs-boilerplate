import React, { Component } from 'react';

import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import SubFirst from './pages/subpage/SubFirst'
import SubSecond from './pages/subpage/SubSecond'
import SubThird from './pages/subpage/SubThird'
import './index.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import { matchRoutes, renderRoutes } from "react-router-config";
import { ALTouchable as Touchable, ALNavigationBar as NavigationBar } from 'ALUI-WEB'
import { View, Text, Button } from 'react-native-web'

const routes = [
    {
        path: "/home",
        component: First,
        exact: true,
    },
    {
        path: "/first",
        component: Second,
        exact: true,
    },
    {
        path: "/second",
        component: Second,
        exact: true,
    },
    {
        path: "/third",
        component: Third,
        routes: [
            {
                path: "/third/first",
                component: SubFirst
            },
            {
                path: "/third/second",
                component: SubSecond
            },
            {
                path: "/third/third",
                component: SubThird
            },
        ]
    }
];


class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        const branch = matchRoutes(routes, '/third/third')
        return (
            <BrowserRouter>
                <View style={{ flex: 1 }}>
                    <Touchable contentContainerStyle={{ backgroundColor: "green" }}
                        onPress={() => { console.log(4444); }}><Text>点击</Text></Touchable>
                    <ul>
                        <li>
                            <Link to="/first">First</Link>
                        </li>
                        <li>
                            <Link to="/second">Second</Link>
                        </li>
                        <li>
                            <Link to="/third">Third</Link>
                        </li>
                    </ul>
                    {/* {renderRoutes(routes)} */}

                    <ul>
                        <li>
                            <Link to="/first">First</Link>
                        </li>
                        <li>
                            <Link to="/second">Second</Link>
                        </li>
                        <li>
                            <Link to="/third">Third</Link>

                        </li>
                    </ul>
                    <Switch>
                        <Redirect from="/" to="/first"></Redirect>

                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}

                    </Switch>

                    {/* <BrowserRouter> */}
                    <Switch>
                        <Redirect from="/first" to="/second"></Redirect>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}


                    </Switch>

                    {/* <Redirect to="/third"></Redirect> */}
                    {/* </BrowserRouter> */}
                    {/* </BrowserRouter> */}
                </View>

            </BrowserRouter>

        );
    }
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default App