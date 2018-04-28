import React, { Component } from 'react';
import './Carousel.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [img5, img1, img2, img3, img4, img5, img1],
            spans: [ img1, img2, img3, img4, img5],
            add: 0,
            Dot: 0,
        }
    }

    // componentDidMount() {
    //     this.timeoutId = setInterval(() => this.handleClick(), 1000)
    // }

    //控制左右
    handleClick(item) {
        if(item === 'buttonNext') {
            if(this.state.Dot >= 4) {
                this.setState({
                    add: 0,
                    Dot: 0
                })
            }else {
                this.setState({
                    Dot: this.state.Dot + 1,
                    add: this.state.add + 1
                })
            }
            
            clearInterval(this.timeoutId)
        }else if(item === 'buttonPrev') {
            if(this.state.add === 0) {
                this.setState({
                    add: 4,
                    Dot: 4
                })
            }else {
                this.setState({
                    add: this.state.add - 1,                    
                    Dot: this.state.Dot - 1
                })
            }
            clearInterval(this.timeoutId)            
        }else {
            if(this.state.add >= 4) {
                this.setState({
                    add: 0
                })
            }else {
                this.setState({
                    add: this.state.add + 1
                })
            }
        }
    }

    handleDot(index) {
        console.log(index)
        this.setState({
            add: index,
            Dot: index
        })
    }

    //控制位置
    position() {
        switch (this.state.add){
            case 0:
                return "onePosition"               
            case 1:
                return "twoPosition"               
            case 2:
                return "therePosition"                                               
            case 3:
                return "fourPosition"                                
            case 4:
               return "fivePosition" 
            case 5:
                return "sixPosition"                           
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper" style={{display:'flex',position:'absolute'}} className={this.position()}>
                    {
                        this.state.imgs.map((t, i) => 
                        <div  key={i}>
                            <img src={t} style={{width:'300px',height:'200px'}} alt=""/>
                        </div>
                    )}
                </div>
                <div className="buttonPrev" onClick={() => this.handleClick('buttonPrev')}>《</div>
                <div className="buttonNext" onClick={() => this.handleClick('buttonNext')}>》</div>
                <div className="Instructions">
                    {this.state.spans.map((t, i) => <div key={i} onClick={() => this.handleDot(i)} style={{backgroundColor:this.state.Dot === i ? 'red' : ''}}  className="circular"></div>)}
                </div>
            </div>
        );
    }
}

export default Carousel;
