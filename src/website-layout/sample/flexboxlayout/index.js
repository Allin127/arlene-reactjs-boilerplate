import React, { PureComponent } from 'react'
import { Card, Input, Select, Switch, Button } from 'antd';
const { Option } = Select;
import "@/common/styles/container.css"
import "./index.css"

import ParentNode from './ParentNode'
import Node from './Node'

export default class FlexBoxLayoutSample extends PureComponent {
    //默认的props
    static defaultProps = {
        param: null
    }

    createEmptyChild = () => {
        return {
            flexChildStyle: {
                width: 80,
                height: 80
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            childNodes: [this.createEmptyChild(), this.createEmptyChild(), this.createEmptyChild()],
            parentStyle: {
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            },
            controlAllChildren: false,
            lastSelectChild: -1
        }
    }



    proxyChildFlexStyleState = (key, value) => {
        if (this.state.controlAllChildren) {
            let arr = this.state.childNodes.reduce((prev, curr) => {
                curr.flexChildStyle[key] = value;
                prev.push(curr);
                return prev;
            }, []);

            this.setState({ childNodes: arr });
        } else if (this.state.lastSelectChild >= 0) {
            this.state.childNodes[this.state.lastSelectChild].flexChildStyle[key] = value;
            this.setState({ childNodes: [...this.state.childNodes] });
        }
    }


    renderSizeInput = () => {
        let mFlexChildStyle;
        if (this.state.controlAllChildren) {
            const { flexChildStyle } = this.state.childNodes[0] || {};
            mFlexChildStyle = flexChildStyle;
        } else {
            const { flexChildStyle } = this.state.childNodes[this.state.lastSelectChild] || {};
            mFlexChildStyle = flexChildStyle;
        }

        let { width, height, flexShrink, flexGrow, flexBasis } = mFlexChildStyle || {};
        return (
            <>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>宽</h4>
                        <Input value={width} maxLength={3} onChange={(e) => { this.proxyChildFlexStyleState("width", e.target.value > 150 ? 150 : parseInt(e.target.value)) }} style={{ width: 70 }} />
                    </div>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>高</h4>
                        <Input value={height} maxLength={3} onChange={(e) => { this.proxyChildFlexStyleState("height", e.target.value > 150 ? 150 : parseInt(e.target.value)) }} style={{ width: 70 }} />
                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>shrink</h4>
                        <Input value={flexShrink} maxLength={2}
                            onChange={(e) => {
                                this.proxyChildFlexStyleState("flexShrink", e.target.value);
                            }}
                            style={{ width: 70 }} />
                    </div>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>grow</h4>
                        <Input value={flexGrow} maxLength={3} onChange={
                            (e) => {
                                this.proxyChildFlexStyleState("flexGrow", e.target.value);
                            }} style={{ width: 70 }} />
                    </div>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>basis</h4>


                        <Input value={flexBasis} maxLength={4} onChange={(e) => {
                            this.proxyChildFlexStyleState("flexBasis", e.target.value <= 150 ? parseInt(e.target.value) : "auto");
                        }} style={{ width: 70 }} />

                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex", flexDirection: "row",marginTop:20 }}>
                    <h4 style={{ display: "inline-block", margin: 0, marginRight: 20}}>同步配置</h4>
                    <div style={{ height:32}}>
                        <Switch  defaultChecked={this.state.controlAllChildren} checked={this.state.controlAllChildren}
                            onChange={(checked) => { this.onSwitchChanged("controlAll", checked) }} >
                        </Switch>
                    </div>

                </div>
            </>
        )
    }


    proxyState = (key, value) => {
        let newValue = { [key]: value };
        this.setState(newValue);
        this.setState({ parentStyle: Object.assign({}, this.state.parentStyle, newValue) });
    }

    renderContainer = () => {
        return (
            <>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, display: "inline-block", lineHeight: "32px" }}>flex-direction</h4>
                        <Select defaultValue="row" value={this.state.flexDirection} style={{ flex: 1 }} onChange={(value) => {
                            this.proxyState("flexDirection", value);
                        }}>
                            <Option value="row">row</Option>
                            <Option value="column">column</Option>
                            <Option value="row-reverse">row-reverse</Option>
                            <Option value="column-reverse">column-reverse</Option>
                        </Select>
                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>justifyContent</h4>
                        <Select defaultValue="center" value={this.state.justifyContent} style={{ flex: 1 }} onChange={(value) => {
                            this.proxyState("justifyContent", value);
                        }}>
                            <Option value="center">center</Option>
                            <Option value="flex-start">flex-start</Option>
                            <Option value="flex-end">flex-end</Option>
                            <Option value="space-between">space-between</Option>
                            <Option value="space-around">space-around</Option>
                            <Option value="space-evenly">space-evenly</Option>
                        </Select>
                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>alignItems</h4>
                        <Select defaultValue="center" value={this.state.alignItems} style={{ flex: 1 }} onChange={(value) => {
                            this.proxyState("alignItems", value);
                        }}>
                            <Option value="center">center</Option>
                            <Option value="flex-start">flex-start</Option>
                            <Option value="flex-end">flex-end</Option>
                            <Option value="baseline">baseline</Option>
                            <Option value="stretch">stretch</Option>

                        </Select>
                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>alignContent</h4>
                        <Select defaultValue="center" value={this.state.alignContent} style={{ flex: 1 }} onChange={(value) => {
                            this.proxyState("alignContent", value);
                        }}>
                            <Option value="center">center</Option>
                            <Option value="stretch">stretch</Option>
                            <Option value="flex-start">flex-start</Option>
                            <Option value="flex-end">flex-end</Option>
                            <Option value="space-between">space-between</Option>
                            <Option value="space-around">space-around</Option>
                        </Select>
                    </div>
                </div>
                <div className="flex-1" style={{ "display": "flex" }}>
                    <div className="flex-1" style={{ "display": "flex", flexDirection: "column" }}>
                        <h4 style={{ verticalAlign: "middle", margin: 0, flex: 1, lineHeight: "32px" }}>flexWrap</h4>
                        <Select defaultValue="nowrap" value={this.state.flexWrap} style={{ flex: 1 }} onChange={(value) => {
                            this.proxyState("flexWrap", value);
                        }}>
                            <Option value="nowrap">nowrap</Option>
                            <Option value="wrap">wrap</Option>
                            <Option value="wrap-reverse">wrap-reverse</Option>
                        </Select>
                    </div>
                </div>
            </>
        )
    }

    renderChildNodes = () => {
        return this.state.childNodes.reduce((prev, curr, index, arr) => {
            prev.push(<Node key={index} _idx={index + 1}
                flexChildStyle={curr.flexChildStyle}
                selected={!!curr.selected}
                onClick={(e) => {
                    curr.selected = true;
                    if (this.state.lastSelectChild >= 0 && this.state.lastSelectChild != index) {
                        this.state.childNodes[this.state.lastSelectChild].selected = false;
                    }
                    this.state.childNodes[index] = curr;
                    this.setState({ isParentSelected: false, lastSelectChild: index, "childNodes": [...this.state.childNodes] });
                    e.stopPropagation();
                }}
            />);
            return prev;
        }, []);
    }

    onSwitchChanged = (type, checked) => {
        if (type == "controlAll") { //是否控制所有children
            this.setState({ controlAllChildren: checked });
            if (checked) {
                //resetChildren
                if (this.state.lastSelectChild >= 0) {
                    this.state.childNodes[this.state.lastSelectChild].selected = false;
                }
                this.setState({  lastSelectChild: -1, "childNodes": [...this.state.childNodes] });
            }
        }
    }

    renderControlButton = () => {
        return (

            <div style={{ position: "absolute", bottom: 0, right: 0, left: 0, height: 48 }}>
                <Button type="primary" style={{ height: 48, width: '50%' }} className="flex-1"
                    onClick={() => {
                        this.appendChild();
                    }}
                >添加元素</Button>
                <Button style={{ height: 48, width: '50%' }} className="flex-1"
                    onClick={() => {
                        this.removeChild();
                    }}
                >删除元素</Button>
            </div>

        )
    }

    removeChild = ()=>{
        if(this.state.lastSelectChild>=0&&!this.state.isParentSelected){
            this.state.childNodes.splice(this.state.lastSelectChild,1);
            this.setState({childNodes:[...this.state.childNodes],lastSelectChild:-1});
            
        }
    }

    appendChild = () => {
        this.state.childNodes.push(this.createEmptyChild());
        this.setState({childNodes:[...this.state.childNodes]});
    }


    render() {
        let nodes = this.renderChildNodes();
        return (
            <div className="playground" style={{ display: "flex", height: "100%", padding: 10 }}>
                <Card className="card-container" style={{ width: 300, height: "100%" }}>
                    <h3>基础参数</h3>
                    {!this.state.isParentSelected && this.renderSizeInput()}
                    {this.state.isParentSelected && this.renderContainer()}
                    {this.renderControlButton()}
                </Card>
                <div className="flex-1 common-container" style={{ height: "100%" }}>
                    <ParentNode selected={this.state.isParentSelected} flexStyle={this.state.parentStyle} onClick={() => {
                        if (this.state.lastSelectChild >= 0) this.state.childNodes[this.state.lastSelectChild].selected = false;
                        this.setState({ childNodes: [...this.state.childNodes], isParentSelected: true, lastSelectChild: -1 });
                    }}>
                        {nodes}
                    </ParentNode>
                </div>
            </div>
        )
    }
}