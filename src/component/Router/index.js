import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import { Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Personal from './Personal'
import News from './News'
import './router.css';

class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    handleClick(item, name) {     
        if(item !== '首页' &&name === 'arrRouter') {
            let data = {
                name: item,
                history: this.props.history,
                push: 'arrRouter'
            }
            this.props.controlRouter(data)   
        }
        if(item === '首页') {
            this.props.history.push('/')
        }else if(item === '个人中心') {
            this.props.history.push('/Personal')            
        }else if(item === '消息中心') {
            this.props.history.push('/News')           
        }
    }

    //删除
    handlePop(item, name, index, event) { 
        event.stopPropagation();                
        this.props.history.push('/')
        if(name === 'homeRouter') {
            let data = {
                name: item,
                history: this.props.history,
                pop: 'homeRouter',
                index
            }
            this.props.controlRouter(data)
        }
    }
    render() {
        let Arr = ['首页', '个人中心', '消息中心', '集合中心', '用户中心']
        return (
            <div className="container">
                <div className='position'>
                    <div className='name'  onClick={() => this.handleClick('首页', 'homeRouter')}>首页</div>
                    {this.props.home.map((t, i) => <div className='name' key={i} onClick={() => this.handleClick(t, 'homeRouter')}>{t}<span onClick={(e) => this.handlePop(t, 'homeRouter', i, e)}><i className="iconfont icon-shanchuguanbicha"></i></span></div>)}                    
                </div>
                <div>
                    {
                        Arr.map((t, i) => <div key={i} className='home' onClick={() => this.handleClick(t, 'arrRouter')}>
                            {t}
                        </div>)
                    }
                </div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/Personal' exact component={Personal}></Route>
                <Route path='/News' exact component={News}></Route>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routers))