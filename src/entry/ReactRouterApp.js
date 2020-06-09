import React, { Component } from 'react';

import First from '../common/pages/First'
import Second from '../common/pages/Second'
import Third from '../common/pages/Third'
import SubFirst from '../common/pages/subpage/SubFirst'
import SubSecond from '../common/pages/subpage/SubSecond'
import SubThird from '../common/pages/subpage/SubThird'
import {  BrowserRouter,Link} from 'react-router-dom'
import { matchRoutes, renderRoutes } from "react-router-config";
import { ALTouchable as Touchable, ALNavigationBar as NavigationBar } from 'ALUI-WEB'
import { View, Text, Button } from 'react-native-web'

const routes = [
    {
        path: "/first",
        component: First
    },
    {
        path: "/third/third",
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
    }

    componentWillUnmount() {
    }
    render() {
        const branch = matchRoutes(routes, '/third/third')
        return (
            <BrowserRouter>
                <View style={{ flex: 1 }}>
                    <Touchable contentContainerStyle={{ backgroundColor: "green" }}
                        onPress={() => { console.log(4444) }}><Text>点击</Text></Touchable>
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
                    {renderRoutes(routes)}
                </View>
            </BrowserRouter>

        );
    }
}

export default App