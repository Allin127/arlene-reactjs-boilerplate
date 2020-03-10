import React, { Component } from 'react';
import { matchRoutes, renderRoutes } from "react-router-config";

export default class SubFirst extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount")
        // let a = matchRoutes(this.props.route.routes,"/third")
        // console.log(a)
        // debugger;
        // super.componentDidMount();
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        // super.componentWillMount();
    }
    render() {
        return (
        <div> {this.__proto__.constructor.name} </div>
        );
    }
}