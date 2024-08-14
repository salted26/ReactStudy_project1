import React, {Component} from 'react';

class BoxClass extends Component {

    constructor(props) {
        super(props);
        this.state( {
            value:this.state.value,
            num:this.state.num
        })
    }

    render() {
        return (
            <div>
                Box{this.state.num}
            </div>
        );
    }
}

export default BoxClass;