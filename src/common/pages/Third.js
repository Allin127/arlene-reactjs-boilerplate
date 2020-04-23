import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
export default class Third extends Component {

    render() {
        return (
            <div>
                <h2>SubPage</h2>
                <ul>
                    <li>
                        <Link to="/third/first">Sub First</Link>
                    </li>
                    <li>
                        <Link to="/third/second">Sub Second</Link>
                    </li>
                    <li>
                        <Link to="/third/third">Sub Third</Link>
                    </li>
                </ul>
            </div>
        );
    }
}