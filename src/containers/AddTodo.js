import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { addTodo }  from '../actions';


class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    const text = event.target.value.trim();
    const dispatch = this.props.dispatch;
    console.log(dispatch)

    
    if(event.which === 13 && text.length !== 0) {
      dispatch(addTodo(text));
    };
    
    event.target.value = '';
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
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

export default AddTodo;

// export default connect()(AddTodo)