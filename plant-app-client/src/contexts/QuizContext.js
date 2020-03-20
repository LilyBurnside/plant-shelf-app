import React from 'react'

const QuizContext = React.createContext({
  addedMessage: [<p>Added to wishlist!</p>],
  answers: [],
  error: null,
  plants: [],
  question: null,
  questions: [],
  questionId: 1,
  translatedAnswers: [],
  userId: null,
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
  clearPlants: () => {},
  setUserId: () => {},
  clearUserId: () => {}
})

export default QuizContext

export class QuizProvider extends React.Component {
  state = {
    addedMessage: [<p>Added to wishlist!</p>],
    answers: [],
    error: null,
    plants: [],
    question: null,
    questions:[],
    questionId: 1,
    translatedAnswers: [],
    userId: null,
  };

  setError = error => {
    console.log(error)
    this.setState({ error: error })
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

  setUserId = userId => {
    this.setState({ userId })
  }

  clearUserId = userId => {
    this.setState({ userId: null })
  }

  render() {
    const value ={
      addedMessage: this.state.addedMessage,
      answers: this.state.answers,
      error: this.state.error,
      plants: this.state.plants,
      question: this.state.question,
      questions: this.state.questions,
      questionId: this.state.questionId,
      translatedAnswers: this.state.translatedAnswers,
      userId: this.state.userId,
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
      setUserId: this.setUserId,
      clearUserId: this.clearUserId,
    }
    return (
      <QuizContext.Provider value={value}>
        {this.props.children}
      </QuizContext.Provider>
    )
  }
}