import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Model from './Model'

injectGlobal`
    html, body, #root {
        height: 100%;
    }
    body {
        margin: 0;
    }
`

const Container = styled.div`
    width: 500px;
    height: 81px;
    background-color: #3d486a;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -250px;
    z-index: 101;
`
const Top = styled.div`
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    color: #ffffff;
`
const Pencil = styled.div`
    cursor: pointer;
    width: 22px;
    height: 22px;
`
const Bottom = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Weight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 30%;
`
const Info = styled.div`
    color: #ffffff;
`
const Small = styled.div`
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
`
const Middle = styled.div`
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
`
const Large = styled.div`
    width: 11px;
    height: 11px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
`
const Color = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Chosen = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${props => props.color};
`
const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
`
const Column = styled.div`
    width: 12px;
    height: 24px;
`
const Item = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.color};
    /* border: 1px solid #aaa; */
    margin-bottom: 1px;
    box-sizing: border-box;
    cursor: pointer;
`
class Board extends Component {
    state = {
        show: false,
        chosen: '#000',
        weight: '6px'
    }
    handleClick() {
        this.setState({
            show: !this.state.show
        })
    }
    changeColor(color) {
        this.setState({
            chosen: color
        })
    }
    changeWeight(weight) {
        this.setState({
            weight: weight
        })
    }
    render() {
        return(
            <Fragment>
                <Container>
                    <Top>
                        <Pencil onClick={() => this.handleClick()}>
                            <i className="fas fa-pencil-alt"></i>
                        </Pencil>
                    </Top>
                    <Bottom>
                        <Weight>
                            <Info>粗细</Info>
                            <Small onClick={() => this.changeWeight('6px')}></Small>
                            <Middle onClick={() => this.changeWeight('8px')}></Middle>
                            <Large onClick={() => this.changeWeight('10px')}></Large>
                        </Weight>
                        <Color>
                            <Info>颜色</Info>
                            <Chosen color={this.state.chosen}></Chosen>
                            <Panel>
                                <Column>
                                    <Item color='#101010' onClick={() => this.changeColor('#101010')}></Item>
                                    <Item color='#fff' onClick={() => this.changeColor('#fff')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#d9d9d9' onClick={() => this.changeColor('#d9d9d9')}></Item>
                                    <Item color='#b3b3b3' onClick={() => this.changeColor('#b3b3b3')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#ff4081' onClick={() => this.changeColor('#ff4081')}></Item>
                                    <Item color='#e6777e' onClick={() => this.changeColor('#e6777e')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#ff9800' onClick={() => this.changeColor('#ff9800')}></Item>
                                    <Item color='#d9bd59' onClick={() => this.changeColor('#d9bd59')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#8bc34a' onClick={() => this.changeColor('#8bc34a')}></Item>
                                    <Item color='#72a82d' onClick={() => this.changeColor('#72a82d')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#7affd7' onClick={() => this.changeColor('#7affd7')}></Item>
                                    <Item color='#53c2c9' onClick={() => this.changeColor('#53c2c9')}></Item>
                                </Column>
                                <Column>
                                    <Item color='#1e6ee6' onClick={() => this.changeColor('#1e6ee6')}></Item>
                                    <Item color='#503fb5' onClick={() => this.changeColor('#503fb5')}></Item>
                                </Column>
                            </Panel>
                        </Color>
                    </Bottom>
                </Container>
                {
                    this.state.show ?
                    <Model show={this.state.show}/> : null

                }
            </Fragment>
        )
    }
}

export default Board