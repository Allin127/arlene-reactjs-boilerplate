import React, { Component } from 'react'
import { HashRouter as Router, Route, Link,Redirect,Switch} from "react-router-dom";
import FirstPage from '@/common/pages/First';
import SecondPage from '@/common/pages/Second';
import ThridPage from '@/common/pages/Third';
import SubFirst from '@/common/pages/subpage/SubFirst';
import SubSecond from '@/common/pages/subpage/SubSecond';
import SubThird from '@/common/pages/subpage/SubThird';
import LongPage from '@/common/pages/LongPage';

import 'antd/dist/antd.css';
import './index.css';

import { Layout, Menu } from 'antd';
import Aside from '../components/Aside'
import NoMatch from '../components/NoMatch'
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
                            <Switch>
                                <Route path="/third/first" component={SubFirst} />
                                <Route path="/third/second" component={SubSecond} />
                                <Route path="/third/third" component={SubThird} />
                                <Route exact path="/first" component={FirstPage} />
                                <Route path="/second" component={SecondPage} />
                                <Route path="/third" component={ThridPage} />
                                <Route path="/longPage" component={LongPage} />
                                <Route path={["/404Page","*"]} component={NoMatch} />
                            </Switch>
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