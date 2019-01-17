import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); //trims empty spaces

    const error = this.props.handleAddOption(option); //error value

    if (!error) {
      e.target.elements.option.value = '';
    }

    //old syntax
    // this.setState(() => {
    //   return {
    //     error //es6 object shorthand, same as error:error
    //   }
    // })

    //new syntax
    this.setState(() => ({error})); //the new state is set to the error value up above
  };

  render() {
    return ( //if error is truthy, render the error
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option"/>
            <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}