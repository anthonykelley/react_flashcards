import React from 'react';
import CardComponent from './CardComponent'
import NewCardForm from './NewCardForm'

class App extends React.Component {
  state = {
    cards: [
      {question: 'What is React?', answer: 'How should I Know?'},
      {question: 'What is JavaScript?', answer: 'It\'s part of React.'},
      {question: 'Why did I sign up for this class?', answer: 'test'}
    ]
  }

  addCardHome = (newCard) => {
    this.setState({cards: [...this.state.cards, newCard]})
  }

  render() {
    return (
      <div>
        <h1>Flashcards</h1>
        <NewCardForm addCardForm={this.addCardHome}/>
        {this.state.cards.map( item => {
          return(
            <CardComponent key={item.question} card={item} />
          )
        })}
      </div>
    );
  }
}

export default App;
