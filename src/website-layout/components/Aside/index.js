import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
import { Menus } from './Menu.config.js';
import { SubMenuConfig } from './SubMenu.config.js';
const { SubMenu } = Menu;
@withRouter
export default class Aside extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            openKeys:this.getDefaultOpenKeys()
        }
    }
    /** 二级导航 支持 **/
    /**
     * 获取菜单项数据
     */
    getNavMenuItems = (menusData) => {
        if (!menusData) {
            return [];
        }
        let menuDatas = menusData
            .filter(item => item.name && !item.hideInMenu)
            .map((item, index) => {
                return this.getSubMenuOrItem(item, index);
            });
        return menuDatas;
    }

    /**
     * 二级导航
     */
    getSubMenuOrItem = (item, index) => {
        if (item.children && item.children.some(child => child.name)) {
            const childrenItems = this.getNavMenuItems(item.children);
            if (childrenItems && childrenItems.length > 0) {
                const subMenu = (
                    <SubMenu
                        key={index}
                        title={
                            <span>
                                {item.icon}
                                <span>{item.name}</span>
                            </span>
                        }
                    >
                        {childrenItems}
                    </SubMenu>
                );

                return subMenu;
            }
            return null;
        }
        const menuItem = (
            <Menu.Item key={item.path}>{item.icon}<Link to={item.path}>{item.name}</Link></Menu.Item>
        );

        return menuItem;
    }
    onOpenChange = openKeys => {
        this.setState({ openKeys });
    };


    /**
     * 获取默认展开菜单项
     */
    getDefaultOpenKeys() {
        const { pathname } = this.props.location;
        let openKeys = [];
        
        SubMenuConfig.forEach((item, index) => {
            if (pathname.startsWith(item.path)) {
                openKeys = [`${index}`];
            }
        });
        console.log(openKeys);
        return openKeys;
    }



    /** 一级导航 支持 **/
    createMenu = () => {
        let _allMenues = Menus.reduce((prev, curr) => {
            prev.push(<Menu.Item key={curr.path}>{curr.icon}<Link to={curr.path}>{curr.name}</Link></Menu.Item>)
            return prev
        }, []);
        this.setState({ menu: _allMenues });
    }

    createMenuArr = () => {
        let _allMenues = Menus.reduce((prev, curr) => {
            prev.push(<Menu.Item key={curr.path}>{curr.icon}<Link to={curr.path}>{curr.name}</Link></Menu.Item>)
            return prev
        }, []);
        return _allMenues;
    }
    // componentDidUpdate(prevProps,prevState) {
    //     // Typical usage (don't forget to compare props):
    //     console.log("componentDidUpdate")
    //     if (this.state.openKeys[0] !== prevState.openKeys[0]) {
    //         this.setState({ openKeys:this.getDefaultOpenKeys() });
    //     }
    //   }

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
                    <Menu theme="dark" mode="inline"
                        defaultSelectedKeys={["/first"]}
                        openKeys={this.state.openKeys}
                        defaultOpenKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        selectedKeys={[this.props?.location?.pathname]}
                    >
                        {/* {this.createMenuArr()} */}
                        {this.getNavMenuItems(SubMenuConfig)}
                    </Menu>
                </Sider>
            </>
        )
    }
}