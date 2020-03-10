import React, { Component } from 'react';
import { matchRoutes, renderRoutes } from "react-router-config";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Third extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount")
        // super.componentDidMount();
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        // super.componentWillMount();
    }
    render() {
        return (
            <div>
                <h2>SubPage</h2>
                <ul>
                    <li>
                        <Link to="/third/first">SubFirst</Link>
                    </li>
                    <li>
                        <Link to="/third/second">SubSecond</Link>
                    </li>
                    <li>
                        <Link to="/third/third">SubThird</Link>
                    </li>
                </ul>
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}