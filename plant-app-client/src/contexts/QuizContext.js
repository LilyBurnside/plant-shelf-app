import React from 'react'

const QuizContext = React.createContext({
  questions: [],
  question: null,
  questionId: 1,
  selectedAnswer: '',
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
  changeAnswer: () => {},
  setAnswers: () => {},
  addAnswer: () => {},
  setTranslatedAnswers: () => {},
  addTranslatedAnswer: () => {},
  setPlants: () => {}
})

export default QuizContext

export class QuizProvider extends React.Component {
  state = {
    questions:[],
    question: null,
    questionId: 1,
    selectedAnswer: '',
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
    this.setState({ questionId: this.state.questionId - 4})
  }

  changeAnswer = answer => {
    this.setState({ selectedAnswer: answer })
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
    // const newPlants = JSON.stringify(plants)
    this.setState({ plants })
  }

  render() {
    const value ={
      questions: this.state.questions,
      question: this.state.question,
      questionId: this.state.questionId,
      selectedAnswer: this.state.selectedAnswer,
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
      changeAnswer: this.changeAnswer,
      setAnswers: this.setAnswers,
      addAnswer: this.addAnswer,
      setTranslatedAnswers: this.setTranslatedAnswers,
      addTranslatedAnswer: this.addTranslatedAnswer,
      setPlants: this.setPlants,
    }
    return (
      <QuizContext.Provider value={value}>
        {this.props.children}
      </QuizContext.Provider>
    )
  }
}