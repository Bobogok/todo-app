import React, { Component } from 'react';


class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit = event => {
    const text = event.target.value.trim();
    const onSave = this.props.onSave;
    console.log(onSave)

    
    if(event.which === 13) {
      onSave(text);
      this.setState({ text: '' });
    };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <input 
        className='header__input'
        type='text'
        placeholder='Add a task...'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

export default TodoTextInput;