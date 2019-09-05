import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'; //Usar buttons
import Input from './components/Input'; //Usar inputs
import ClearButton from './components/ClearButton'; //Usar ClearButton

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "" 
    }
  } //Constructor irá iniciar o programa com todos states vazios

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }; //Pega o state do input (numero que está no button)

  addZeroToInput = val => {
    if(this.state.input !== ""){
      this.setState({ input: this.state.input + val })
    }
  }; //Pega o state do input (numero que está no button) valida se não é o primeiro numero, então insere o zero

  addDecimalToInput = val => {
    if(this.state.input.indexOf(".") === -1){
      this.setState({ input: this.state.input + val })
    }
  }; //Verifica se não tem um decimal antes e caso não tenha ele insere

  clearInput = () => {
    this.setState({ input: "" });
  }; //Limpa o input

  add = () => {
    this.state.previousNumber = this.state.input; //Pega o numero que está no visor
    this.setState({input: ""});
    this.state.operator = "plus"; //Transforma o state do operator para a função matematica desejada
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "subtract";
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "divide";
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "multiply";
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator == "plus"){
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "subtract"){
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "divide"){
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "multiply"){
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      });
    }
  }

  render(){   
    return(
      <div className="App">
        <div className="calc-center">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimalToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
