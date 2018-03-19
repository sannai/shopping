import React, { Component } from 'react';
import './App.css';
import Header from '../page/Header/Header'
// import Board from '../component/page/Board'
// import Model from '../component/page/Model'
// import Paint from '../component/Paint/Paint'
// import Calculator from '../component/Calculator/Calculator'
// import Paint from '../component/Paint/Paint'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Calculator /> */}
        {/* <Paint />
        <Board /> */}
         <Header />
      </div>
    );
  }
}

export default App;
