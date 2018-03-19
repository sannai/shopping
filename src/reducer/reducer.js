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
}, {})
export default reducer
