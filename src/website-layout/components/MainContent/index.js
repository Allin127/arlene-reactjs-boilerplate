import React, { PureComponent } from 'react'
import { Route,Switch} from "react-router-dom";
import FirstPage from '@/common/pages/First';
import SecondPage from '@/common/pages/Second';
import ThridPage from '@/common/pages/Third';
import SubFirst from '@/common/pages/subpage/SubFirst';
import SubSecond from '@/common/pages/subpage/SubSecond';
import SubThird from '@/common/pages/subpage/SubThird';
import LongPage from '@/common/pages/LongPage';
import NoMatch from '../NoMatch'
import FlexBoxLayoutSample from '../../sample/flexboxlayout'
export default class extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/layout/flex-box" component={FlexBoxLayoutSample} />
                <Route path="/third/first" component={SubFirst} />
                <Route path="/third/second" component={SubSecond} />
                <Route path="/third/third" component={SubThird} />
                <Route path="/first" component={FirstPage} />
                <Route path="/second" component={SecondPage} />
                <Route path="/third" component={ThridPage} />
                <Route path="/longPage" component={LongPage} />
                <Route path={["/404Page", "*"]} component={NoMatch} />
            </Switch>
        )
    }
}