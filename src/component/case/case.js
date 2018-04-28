import React, { Component } from 'react';
import './case.css';
import Abc from './a'

class Case extends Component {
    handleClick () {
        console.log('a')
    }
    render() {
        return (
            <div class="container">
                <div class="item1">flex item 1</div>
                <div class="item2">
                    <div class="item3">flex item 3</div>  
                    <div class="item3">flex item 4</div>  
                    <div class="item3">flex item 4</div>  
                    <div class="item4">flex item 5</div>  
                </div>
                <Abc text={'aaaa'} handleClick={() => this.handleClick()} />
            </div>
        );
    }
}

export default Case