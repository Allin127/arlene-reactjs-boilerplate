import React, { PureComponent } from 'react'
import './index.css'
import classNames from 'classnames'
export default class ParentNode extends PureComponent {
    //默认的props
    static defaultProps = {
        selected: false
    }
    state = {
        param: null
    }
    constructor(props) {
        super(props);
    }


    render() {
        let { style, flexStyle,children } = this.props;
        style = Object.assign({}, style, flexStyle);
        return (
            <div
                style={style}
                onClick={this.props.onClick}
                className={classNames("flex-container-layout", "node", { "selected": this.props.selected })}>
                {children}
                </div>
        )
    }
}