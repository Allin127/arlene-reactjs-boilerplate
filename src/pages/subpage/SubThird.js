import React, { Component } from 'react';
export default class SubThird extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount")
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