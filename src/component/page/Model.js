import React, { Component } from 'react'
import styled from 'styled-components'
import blue from './blue.cur'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
    cursor: ${props => props.show ? `url(${blue}), auto` : 'auto'};
`

const Canvas = styled.canvas.attrs({
    width: window.innerWidth,
    height: window.innerHeight
})``

class Model extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ctx: null,
            start: false,
            startX: 0,
            startY: 0
        }
    }
    componentDidMount() {
        this.setState({
            ctx: this.canvas.getContext('2d')
        })
        let ctx = this.canvas.getContext('2d')
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#f00";
        ctx.fillStyle = "#f00";

        let hue = 0;
        let x = 0;
        let y = 0;

        function draw(e) {
            if (!isDrawing) return;

            x = e.offsetX;
            y = e.offsetY;

            //变色
            ctx.strokeStyle = `hsl(${ hue }, 90%, 50%)`;
            if (hue >= 360) hue = 0;
            hue++;


            //控制绘制路径
            ctx.beginPath();

            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();

            [lastX, lastY] = [x, y];

        }
        this.canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });

        this.canvas.addEventListener('mousemove', draw);
        this.canvas.addEventListener('mouseup', () => isDrawing = false);
        this.canvas.addEventListener('mouseout', () => isDrawing = false);
    }
    start(e) {
        this.setState({
            start: true
        })
    }
    stop() {
        this.setState({
            start: false
        })
    }
    draw(e) {
        if(!this.state.start) {
            return
        }
        let endX = e.offsetX
        let endY = e.offsetY
    }
    render() {
        return(
            <Container show={this.props.show}>
                <Canvas innerRef={x => this.canvas = x}
                    onMouseDown={(e) => this.start(e)}
                    onMouseUp={() => this.stop()}
                    onMouseMove={(e) => this.draw(e)}
                ></Canvas>
            </Container>
        )
    }
}

export default Model