import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  //   // <div>只能有一个</div>
  // );
  state = {
    persons: [
      {name:'米斯特姆',age:50},
      {name:'James',age:20},
      {name:'Hamelate',age:34}
    ],
    otherState: 'anything'
  }
  changeAge = ()=>{
    // Don't do this: this.state.persons[0].name='张飞'
    this.setState({
      persons: [
        {name:'米斯特姆222',age:50},
        {name:'James',age:20222},
        {name:'Hamelate',age:34}
      ]
    })
  }
  render(){
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <p>Hi, React App</p>
      <button onClick={this.changeAge}>更改状态</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>KAKKAKKAK</Person>
    </div>
  );
  }
}

export default App;
