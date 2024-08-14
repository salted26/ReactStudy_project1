import React, {Component} from 'react';

class BoxClass extends Component {

    render() {
        return (
            <div>
                Box : {this.props.num}
            </div>
        );
    }
}

export default BoxClass;