import React, {Component} from 'react';
import BoxClass from "./component/BoxClass";

class AppClass extends Component {

    // 실행하면 제일 먼저 동작함
    constructor(props) {
        super(props);
        this.state ={
            counter2:0,
            num:1,
            value:0
        }
    };

    increase=()=>{
        this.setState({
            counter2: this.state.counter2 + 1
            , value: this.state.value + 1
        });
    };

    render() {
        return (
            <div>
                <div>state : {this.state.counter2}</div>
                <button onClick={this.increase}>클릭</button>
                <BoxClass num={this.state.value} />
            </div>
        );
    }
}

export default AppClass;