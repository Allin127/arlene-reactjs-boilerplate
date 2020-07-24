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
    _style ={}
    constructor(props) {
        super(props);
        this.eventEmitter = this.props.eventEmitter;
        this.eventEmitter.on("css-collect",()=>{
            this.eventEmitter.emit("css-collect-callback",this._style,"container")
        })

    }


    render() {
        let { style, flexStyle,children } = this.props;
        style = Object.assign({}, style, flexStyle);
        this._style=style;
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