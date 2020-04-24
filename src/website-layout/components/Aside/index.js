import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Link,withRouter} from "react-router-dom";
import { Layout, Menu } from 'antd';

const {  Sider } = Layout;
import {Menus} from './Menu.config.js';

@withRouter
export default class Aside extends PureComponent {
    state = {

    }
    constructor(props){
        super(props);
    }


    createMenu = ()=>{
       let _allMenues = Menus.reduce((prev,curr)=>{
        prev.push(<Menu.Item key={curr.path}>{curr.icon}<Link to={curr.path}>{curr.name}</Link></Menu.Item>)
            return prev
        },[]);
        this.setState({menu:_allMenues});
    }

    createMenuArr = ()=>{
        let _allMenues = Menus.reduce((prev,curr)=>{
         prev.push(<Menu.Item key={curr.path}>{curr.icon}<Link to={curr.path}>{curr.name}</Link></Menu.Item>)
             return prev
         },[]);
         return _allMenues;
     }

    render() {
        return (
            <>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        background: "#001529"
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["/first"]} selectedKeys={[this.props?.location?.pathname]}>
                       {this.createMenuArr()}
                    </Menu>
                </Sider>
            </>
        )
    }
}