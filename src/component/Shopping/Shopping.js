import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import './Shopping.css';

class Shopping extends Component {
    static defaultProps = {
        // Shopping: [
        //     {
        //         id: 1,
        //         type: false,
        //         shop: '卡门KM男装2018',
        //         price: 152,
        //         num: 10,
        //     },
        //     {
        //         id: 2,
        //         type: false,
        //         shop: '青少年',
        //         price: 352,
        //         num: 5,
        //     },
        //     {
        //         id: 3,
        //         type: false,
        //         shop: '潮牌休',
        //         price: 512,
        //         num: 40,
        //     },
        //     {
        //         id: 4,
        //         type: false,
        //         shop: '2018',
        //         price: 152,
        //         num: 0,
        //     },
        //     {
        //         id: 5,
        //         type: false,
        //         shop: '青少年',
        //         price: 52,
        //         num: 5,
        //     },
        //     {
        //         id: 6,
        //         type: false,
        //         shop: '休',
        //         price: 82,
        //         num: 1,
        //     }
        // ],
    }
    constructor(props) {
        super(props);
        this.state = {
            Shopping: this.props.shopping,//初始化值
            selectPrice:this.props.shopping.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),//总价格
            selectNumber:this.props.shopping.reduce((x, y) => y.type ? x + +y.num : x, 0),//总数量
            Select:false,//全选
        }
    }

    //增加
    handleIncrease(index, number) {
        //这里修改耗费很长时间才解决
        let data = this.state.Shopping.map((t, i) => {
            if (index === i) {
                t.num += +1
            }
            return t
        })
        this.setState({
            Shopping: data,
            selectPrice:data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
            selectNumber:data.reduce((x, y) => y.type ? x + +y.num : x, 0)
        })
    }

    //减少
    handleDecrement(index, number) {
        let data = this.state.Shopping.map((t, i) => {
            if (index === i) {
                if(t.num !== 0 ) {
                    t.num -= +1
                }else {
                    return t
                }
            }
            return t
        })
        this.setState({
            Shopping: data,
            Select:false,//全选
            selectPrice:data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
            selectNumber:data.reduce((x, y) => y.type ? x + +y.num : x, 0)            
        })
    }


    //input修改数量
    handleChange(ref, index) {
        let data = this.state.Shopping.map((t, i) => {
            if (index === i) {
                return {
                     ...t, 
                    [ref]: +this[`textInput${index}`].value.replace(/[^\d.]/g,'') ,
                }
            } else {
                return t
            }
        })
        this.setState({
            Shopping: data,
            selectPrice:data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
            selectNumber:data.reduce((x, y) => y.type ? x + +y.num : x, 0)            
        })
    }

    //删除
    handleDelete(index) {
        //这是过滤
        let data = this.state.Shopping.filter((t ,i) => i !== index) 
        let boolean = true;
        this.setState({
            Shopping: data,
            selectPrice: data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
            selectNumber: data.reduce((x, y) => y.type ? x + +y.num : x, 0)
        })
        data.map((t, i) => {
            if(t.type === false) {
                boolean = false;
                return t
            }
            return t
        })
        this.setState({
            Select:boolean
        })
    }

    //全选
    handleSelect(event) {
        let data;
        if(event.target.checked) {
            data = this.state.Shopping.map((t, i) => {
                t.type = true;
                return t
            })
            this.setState({
                Select:true,
                Shopping: data,
                selectPrice:data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
                selectNumber:data.reduce((x, y) => y.type ? x + +y.num : x, 0) 
            })
        }else {
            data = this.state.Shopping.map((t, i) => {
                t.type = false;
                return t
            })
            this.setState({
                Select:false,
                Shopping: data,
                selectPrice:data.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0),
                selectNumber:data.reduce((x, y) => y.type ? x + +y.num : x, 0) 
            })
        }
    }

    //多选
    handleCheckBox(event, index) {
        let data;
        let boolean = true; //控制n+个选中后变全选
        if(event.target.checked) {
            data = this.state.Shopping.map((t, i) => {
                if(index === i) {
                    t.type = true;
                    return t    
                }else {
                    return t
                }
            })
            
            this.setState({
                Shopping: data,
                selectPrice:data.reduce((x, y) => y.type ? x + y.price * +y.num : x, 0),
                selectNumber:data.reduce((x, y) => y.type ? x + y.num : x, 0),             
            })
        }else {
            data = this.state.Shopping.map((t, i) => {
                if(index === i) {
                    t.type = false;
                    return t    
                }else {
                    return t
                }
            })
            this.setState({
                Shopping: data,
                selectPrice:data.reduce((x, y) => y.type ? x + y.price * +y.num : x, 0),
                selectNumber:data.reduce((x, y) => y.type ? x + y.num : x, 0),         
            })
        }
        //这里控制了点击多个后就全选，思考了很久没解决
        data.map((t, i) => {
            if(t.type === false) {
                boolean = false;
                return t
            }
            return t
        })
        this.setState({
            Select:boolean
        })
    }
    render() {
        let title = ['全选', '商品', '单价', '数量', '小计', '操作']
        return (
            <div className="Shopping">
                <div className='top'>
                    {
                        title.map((t, i) => <div className={i === 1 ? 'W200' : 'W90'} key={i}>
                            {i === 0 ? <input type="checkbox" className='checkbox' checked={this.state.Select} onChange={(e) => this.handleSelect(e)} /> : null}
                            {t}
                        </div>)
                    }
                </div>
                <div className='content'>
                    {
                        this.state.Shopping.map((t, i) =>
                            <div key={i} style={{ display: 'flex' }}>
                                <div style={{ width: '500px' }}>
                                    <input type="checkbox" checked={t.type} name='type' onChange={(e) => this.handleCheckBox(e, i)} />
                                    {t.shop}
                                </div>
                                <div className='W90'>{t.price}</div>
                                <div className='W90' style={{ display: 'flex' }}>
                                    <div className='W50' onClick={() => this.handleDecrement(i, t.num, 'num')}>-</div>
                                    {/* onChange={(e) => this.handleChange(e, i, 'num')} */}
                                    {/* ref={`num${i}`} */}
                                    <input type="text" value={t.num} style={{ width: '30px' }} onChange={() => this.handleChange('num', i )} name={`num${i}`} ref={(input) => this[`textInput${i}`] = input }/>
                                    <div className='W50' onClick={() => this.handleIncrease(i, t.num, 'num')}>+</div>
                                </div>
                                <div className='W90'>{t.price * t.num}</div>
                                <div className='delete' onClick = {() => this.handleDelete(i)}>删除</div>
                            </div>)
                    }
                </div>
                <div className='bottom'>
                    <div>
                        已选择{this.state.selectNumber}件商品
                    </div>
                    <div>
                        总价格￥{this.state.selectPrice}
                    </div>
                    <div>
                        redux{console.log(this.props.shopping)}
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)