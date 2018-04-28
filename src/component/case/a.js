import React, { Component } from 'react';
const Abc = (props) => (
    <div onClick={() => props.handleClick()}>
        {props.text}
    </div>
)
export default Abc;