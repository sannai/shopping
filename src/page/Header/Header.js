import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import './Header.css';
import Shopping from '../../component/Shopping/Shopping'
// import Paint from '../../component/Paint/Paint'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Shopping/>
                {/* <Paint /> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)