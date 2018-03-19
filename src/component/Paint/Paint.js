import React, { Component } from 'react';
import './Paint.css';

class Paint extends Component {
    handleSquare() {
        console.log(this.myCanvas.id)
        let cxt = this.myCanvas.getContext('2d');
        cxt.fillStyle = '#ff0000';
        cxt.fillRect(0, 0, 150, 75) //0左，0上，150宽，75高
    }
    hadleTriangle() {
        let cxt = this.myCanvas.getContext('2d');
        cxt.moveTo(10, 30);//左，上
        cxt.lineTo(150, 50);//宽，高
        cxt.lineTo(30, 180);//左边，角度
        cxt.stroke();
    }
    handleCircular() {
        let cxt = this.myCanvas.getContext('2d');
        cxt.fillStyle = '#ff0000';
        cxt.beginPath();
        //100左， 50上， 45宽， 
        cxt.arc(100, 50, 15, 0, Math.PI*2, true);
        cxt.fill()
    }
	render() {
        let color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
		return (
			<div className="Paint" onClick={() => this.handleCircular()}>
				<div className='top'>
					<canvas id='myCanvas' width='200' height='100' ref={(mySquare) => this.myCanvas = mySquare }>cc</canvas>
				</div>
				<div className="bottom">
                    <div className="BotLeft">
                        <div className='text'>粗细</div>
                        <div className='htoDjs'></div>
                        <div className='dnqmqq'></div>
                        <div className='iwsKbI'></div>
                    </div>
                    <div className='BotRifgt'>
                        <div className='text'>颜色</div>
                        <div className='color'></div>
                        <div className='colorTrumpet'>
                            {
                                color.map((t, i) => 
                                <div className='aggregate'></div>
                            )}
                        </div>
                    </div>
				</div>
			</div>
		);
	}
}

export default Paint;
