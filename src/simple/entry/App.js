import React,{PureComponent} from 'react'
import {Text} from 'react-dom'
import './App.css'
export default class App extends PureComponent {
    //默认的props
    static defaultProps = {
        param:null
    }
    state = {
        param:null
    }
    constructor(props) {
        super(props);
    }
    clicking(){
        console.log(123123123);
    }
    render() {
        return(
            <div className="bg">
                <h2 onClick={this.clicking} style={{color:"#eee",fontSize:"40px",fontWight:"bolder"}}>Hello World</h2>
                <h2 style={{color:"#eee",fontSize:"60px",fontWight:"bolder"}}>Arlene3 </h2>
                <h2 style={{color:"#eee",fontSize:"40px",fontWight:"bolder"}}>Simple ReactJS</h2>
            </div>
        )
    }
}