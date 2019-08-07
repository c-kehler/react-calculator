import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return ( 
            <div class="calculator-keys" >
                <button value={' + '} class="operator" onClick={e => this.props.handleChange(e)}>+</button>
                <button value={' - '} class="operator" onClick={e => this.props.handleChange(e)}>-</button>
                <button value={' / '} class="operator" onClick={e => this.props.handleChange(e)}>/</button>
                <button value={' * '} class="operator" onClick = {e => this.props.handleChange(e)}>*</button>
                <button value={'0'} onClick = {e => this.props.handleChange(e)}>0</button>
                <button value={'1'} onClick = {e => this.props.handleChange(e)}>1</button>
                <button value={'2'} onClick = {e => this.props.handleChange(e)}>2</button>
                <button value={'3'} onClick = {e => this.props.handleChange(e)}>3</button>
                <button value={'4'} onClick = {e => this.props.handleChange(e)}>4</button>
                <button value={'5'} onClick = {e => this.props.handleChange(e)}>5</button>
                <button value={'6'} onClick = {e => this.props.handleChange(e)}>6</button>
                <button value={'7'} onClick = {e => this.props.handleChange(e)}>7</button>
                <button value={'8'} onClick = {e => this.props.handleChange(e)}>8</button>
                <button value={'9'} class="nine" onClick={e => this.props.handleChange(e)}>9</button>
                <button value={'.'} class="decimal"  onClick = {e => this.props.handleChange(e)}>.</button>
                <button class="equal-sign" onClick={e => this.props.handleEquals(e)}>=</button>
                <button class="all-clear" onClick = {e => this.props.handleClear(e)}>CE</button>
            </div>
         );
    }
}
 
export default Button;