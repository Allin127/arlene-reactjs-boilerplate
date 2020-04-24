import React, { Component } from 'react'
import { HashRouter as Router} from "react-router-dom";


// babel-import 优化过了就不需要引入
// import 'antd/dist/antd.css'; 
import './index.css';

import { Layout, Menu } from 'antd';
import Aside from '../components/Aside'
import MainContent from '../components/MainContent'
const { Header, Content, Footer, Sider } = Layout;


export default class Entry extends Component {
    //默认的props
    render() {
        return (
            <>
            <Router>
                <Layout>
                    <Aside/>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                        <Content style={{ margin: '24px 16px 0', overflow: 'scroll' }}>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <MainContent/>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Arlene Platform</Footer>
                    </Layout>
                </Layout>
            </Router>
            </>
        )
    }
}