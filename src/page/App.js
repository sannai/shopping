import React, { Component } from 'react';
import './App.css';
// import Header from '../page/Header/Header'
// import Board from '../component/page/Board'
// import Model from '../component/page/Model'
// import Paint from '../component/Paint/Paint'
// import Calculator from '../component/Calculator/Calculator'
//  import Carousel from '../component/Carousel/Carousel'
import Routers from '../component/Router'
import Shopping from '../component/Shopping/Shopping'
// import Paint from '../component/Paint/Paint'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Calculator /> */}
        {/* <Paint />
        <Board /> */}
         {/* <Carousel /> */}
         <Shopping />
         <Routers />
      </div>
    );
  }
}

export default App;
