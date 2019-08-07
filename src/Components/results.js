import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            result: 0
         }
    }
    render() { 
        return (
            <div className ="calculator-screen" >
            {this.props.display}
            </div>
        );
    }
}
 
export default Results;