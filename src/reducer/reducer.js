import { handleActions } from 'redux-actions'

const reducer = handleActions({
    'OPERATION': (state, action) => 
        {
            if(action.Symbol === '+') {
                return {
                    sum: +action.numOne + +action.numTwo
                }
            }else if(action.Symbol === '-') {
                return {
                    sum: +action.numOne - +action.numTwo
                }
            }else if(action.Symbol === '*') {
                return {
                    sum: +action.numOne * +action.numTwo
                }
            }else if(action.Symbol === '/') {
                return {
                    sum: +action.numOne / +action.numTwo
                }
            }
        }
    ,
    'MODIFYONE': (state, action) => ({
        one: state.one = +action.num
    }),
    'MODIFYTWO': (state, action) => ({
        two: state.two = +action.num
    }),
    'CONTROLROUTER'(state, action)  {
        console.log(action)
        if(action.data.push === 'arrRouter') {
            let a = state.home.filter((item, index, array) => array.indexOf(item) === index)
            console.log(a)
            return {
                ...state,
                ...state.home.push(action.data.name),
                home :state.home.filter((item, index, array) => array.indexOf(item) === index)
            }
        }else if(action.data.pop === 'homeRouter'){
            let a = state.home.filter((item, index, array) => array.indexOf(item) === index)
            console.log(a)
            return {
                ...state,
                ...state.home.splice(action.data.index, 1),
                home :state.home.filter((item, index, array) => array.indexOf(item) === index)
            }
        }   
    }
}, {})
export default reducer
