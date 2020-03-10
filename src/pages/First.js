import React, { Component } from 'react';

import { ALNavigationBar as NavigationBar,ALPage } from 'ALUI-WEB'



export default class First extends ALPage {
    static defaultProps={
        Title:"First"
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        super.componentDidMount();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

}
