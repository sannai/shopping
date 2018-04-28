import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOne: this.props.one,
            NumTwo: this.props.two,
            NumAnd: this.props.sum,
            NumSymbol: '+'
        }
    }
    handleModifyOne(event) {
        this.setState({
            NumOne: event.target.value
        })
        this.props.modifyOne(this.state.NumOne)
    }
    handleModifyTwo(event) {
        this.setState({
            NumTwo: event.target.value
        })
        this.props.modifyTwo(this.state.NumTwo)
    }
    handleSelect(event) {
        if(event.target.value === '+') {
            this.setState({
                NumSymbol: '+'
            })
        } else if(event.target.value === '-') {
            this.setState({
                NumSymbol: '-'
            })
        }else if(event.target.value === '*') {
            this.setState({
                NumSymbol: '*'
            })
        }else if(event.target.value === '/') {
            this.setState({
                NumSymbol: '/'
            })
        }       
    }
    handleEqual(event) {
        this.props.operation(+this.state.NumOne, +this.state.NumTwo, this.state.NumSymbol)
    }
    render() {
        return (
            <div className="Calculator">
                    <div className='Calculation'><input type="text" className='number' onChange={(e) => this.handleModifyOne(e)} value={this.state.NumOne} /></div>
                    <div className='Calculation'>
                        <select className='Select' onChange={(e) => this.handleSelect(e)}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </div>
                    <div className='Calculation'><input type="text" className='number' onChange={(e) => this.handleModifyTwo(e)} value={this.state.NumTwo} /></div>
                    <div className='etc' onClick={(e) => this.handleEqual(e)}>=</div>
                    <div className='Calculation'>{this.props.sum}</div>            
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        one:state.one,
        two:state.two,
        sum:state.sum
    }
}

function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
