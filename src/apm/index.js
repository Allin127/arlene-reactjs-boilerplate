import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';
import detectStayTime from './components/StayTimeDetect'
class App  extends PureComponent {
    //默认的props
    static defaultProps = {
        param:null
    }
    state = {
        param:null
    }
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        
    }
    componentDidMount(){
        debugger;
        // var dom = ReactDOM.findDOMNode();
        detectStayTime(this.scrollRef.current);
    }
    render() {
        return(
            <div ref={this.scrollRef}  style={{height:500,overflow:"auto"}}>
                <div style={{"background":"purple",height:1500}}>BBBB</div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));

