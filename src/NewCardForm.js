import React from 'react';

class NewCardForm extends React.Component {
  state = { question: '', answer: '' }

  onSubmit = (e) => {
    e.preventDefault()
    let newCard = {question: this.state.question, answer: this.state.answer}
    this.props.addCardForm(newCard)
    this.setState({question: '', answer: ''})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return(
      <div>
        <h3>New Card Form</h3>
        <form onSubmit={this.onSubmit}>
          <input 
            value={this.state.question} 
            placeholder='New Card Question'
            name='question'
            onChange={this.handleChange}
          />
          <input 
            value={this.state.answer} 
            placeholder='New Card Answer' 
            name='answer'
            onChange={this.handleChange}            
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    ) 
  }
}

export default NewCardForm;