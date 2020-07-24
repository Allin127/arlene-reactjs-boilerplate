import React, { PureComponent } from 'react'
import './index.css'
import classNames from 'classnames'

export default class Node extends PureComponent {
    //默认的props
    static defaultProps = {
        selected: false
    }
    state = {
        param: null
    }
    constructor(props) {
        super(props);
        this.eventEmitter = this.props.eventEmitter;
        this.eventEmitter.on("css-collect",()=>{
            this.eventEmitter.emit("css-collect-callback",this._style,"child-"+this.props._idx)
        })
    }


    render() {
        let { style, flexChildStyle } = this.props;
        style = Object.assign({ alignItems: "center", justifyContent: "center" }, style, flexChildStyle);
        if (style.flexBasis > 0) {
            style.flexBasis += "px";
        }
        this._style=style;
        return (
            <div
                style={style}
                onClick={this.props.onClick}
                className={classNames("node", { "selected": this.props.selected })}>
                {this.props._idx}
            </div>
        )
    }
}