import React, { PureComponent } from 'react'
import { HashRouter as Router, Route, Link,Redirect,Switch} from "react-router-dom";
import FirstPage from '@/common/pages/First';
import SecondPage from '@/common/pages/Second';
import ThridPage from '@/common/pages/Third';
import SubFirst from '@/common/pages/subpage/SubFirst';
import SubSecond from '@/common/pages/subpage/SubSecond';
import SubThird from '@/common/pages/subpage/SubThird';
export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
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
                    <hr />
                    
                    <Route exact path="/first" component={FirstPage} />
                    <Route path="/second" component={SecondPage} />
                    <Route path="/third" component={ThridPage} />
                    <Route exact path="/third/first" component={SubFirst} />
                    <Route path="/third/second" component={SubSecond} />
                    <Route path="/third/third" component={SubThird} />
                    
                </div>
                <Redirect from="/" to="/first"></Redirect>
                <Switch>
                    <Redirect from="/" to="/first"></Redirect>
                </Switch>
            </Router>
        )
    }
}