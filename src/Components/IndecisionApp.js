import React, { Component } from 'react';
import Options from './Options/Options';
import AddOption from './AddOption/AddOption';
import Header from './DummyComponent/DummyComponentTwo';
import Button from './Button/Button';
import Option from './Option/Option';
import VisibilityToggle from './VisibilityToggle/VisibilityToggle';

class IndecisionApp extends Component {
  state = {
    options: []
  }
  handleDeleteOptions = () => {
    this.setState({options: []});
  }
  handlePickHandler = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter Something';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option is there dummy';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  removeSingleItem = (optionToRemove) => {
    this.setState({options: this.state.options.splice(0, 1, optionToRemove)})
  }
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Button
          handlePick={this.handlePickHandler}
          handleDelete={this.handleDeleteOptions} 
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          removeSingle={this.removeSingleItem}
        />
        <AddOption 
          addOption={this.handleAddOption} />
        <VisibilityToggle />
      </div>
    );
  }
}

export default IndecisionApp;