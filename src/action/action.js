//运算
export const operation = (numOne, numTwo, Symbol) => {
    return {
        type:'OPERATION',
        numOne,
        numTwo,
        Symbol
    }
}

//修改input 
export const modifyOne = (num) => {
    return {
        type:'MODIFYONE',
        num
    }
}

//修改input 
export const modifyTwo = (num) => {
    return {
        type:'MODIFYTWO',
        num
    }
}

export const controlRouter = (data) => {
    return {
        type:'CONTROLROUTER',
        data
    }
}
