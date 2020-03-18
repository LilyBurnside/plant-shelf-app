import React from 'react'

const QuizContext = React.createContext({
  questions: [],
  question: null,
  questionId: 1,
  addedMessage: [<p>Added to wishlist!</p>],
  answers: [],
  translatedAnswers: [],
  plants: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setQuestions: () => {},
  setQuestion: () => {},
  setQuestionId: () => {},
  resetQuestionId: () => {},
  setAnswers: () => {},
  addAnswer: () => {},
  clearAnswers: () => {},
  setTranslatedAnswers: () => {},
  addTranslatedAnswer: () => {},
  setPlants: () => {},
  clearPlants: () => {}
})

export default QuizContext

export class QuizProvider extends React.Component {
  state = {
    questions:[],
    question: null,
    questionId: 1,
    addedMessage: [<p>Added to wishlist!</p>],
    answers: [],
    translatedAnswers: [],
    plants: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setQuestions = questions => {
    this.setState({ questions })
  }

  setQuestion = question => {
    this.setState({ question })
  }

  setQuestionId = questionId => {
    this.setState({ questionId: this.state.questionId + 1})
  }

  resetQuestionId = questionId => {
    this.setState({ questionId: this.state.questionId - 5})
  }

  setAnswers = answers => {
    this.setState({ answers })
  }

  addAnswer = answer => {
    this.setAnswers([
      ...this.state.answers,
      answer
    ])
  }

  clearAnswers = answers => {
    this.setState({ answers: [] })
  }

  setTranslatedAnswers = translatedAnswers => {
    this.setState({ translatedAnswers })
  }

  addTranslatedAnswer = translatedAnswer => {
    this.setTranslatedAnswers([
      ...this.state.translatedAnswers,
      translatedAnswer
    ])
  }

  setPlants = plants => {
    this.setState({ plants })
  }

  clearPlants = plants => {
    this.setState({ plants: [] })
  }

  render() {
    const value ={
      questions: this.state.questions,
      question: this.state.question,
      questionId: this.state.questionId,
      addedMessage: this.state.addedMessage,
      answers: this.state.answers,
      translatedAnswers: this.state.translatedAnswers,
      plants: this.state.plants,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setQuestions: this.setQuestions,
      setQuestion: this.setQuestion,
      setQuestionId: this.setQuestionId,
      resetQuestionId: this.resetQuestionId,
      setAnswers: this.setAnswers,
      addAnswer: this.addAnswer,
      clearAnswers: this.clearAnswers,
      setTranslatedAnswers: this.setTranslatedAnswers,
      addTranslatedAnswer: this.addTranslatedAnswer,
      setPlants: this.setPlants,
      clearPlants: this.clearPlants,
    }
    return (
      <QuizContext.Provider value={value}>
        {this.props.children}
      </QuizContext.Provider>
    )
  }
}