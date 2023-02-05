
import { Component } from 'react';
import './App.css';

class Submission extends Component{
    componentDidMount(){
        fetch("http://192.168.10.17:2461/submit")
        .then(res => res.json())
    }
    render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Submission Page</h1>
        </header>
      </div>
    );
    }
  }
  
  export default Submission;

