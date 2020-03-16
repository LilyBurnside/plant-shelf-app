import React from 'react'
import PlantsApiService from '../../services/plants-api-service'
//import { Link, useHistory } from 'react-router-dom'
import QuizContext from '../../contexts/QuizContext'
// import Question from '../Question/Question'

export default class Quiz extends React.Component {

  static contextType = QuizContext 

  componentDidMount() {
    this.context.clearError()
    PlantsApiService.getQuestions()
      .then(this.context.setQuestions)
      .catch(this.context.setError)
  }

  handleNextPress = e => {
    e.preventDefault()
    console.log(`target value in next press ${e.target.answer.value}`)
    this.context.addAnswer(e.target.answer.value)
    console.log(`answers array ${this.context.answers}`)
    this.context.setQuestionId()
    if (this.context.questionId === 5) {
      this.props.history.push('/results')
    }
  }

  // handleAnswerChange = (answer) => {
  //   console.log(`target value in answer change ${answer.target.value}`)
  //   console.log(this.context.changeAnswer)
  //   this.context.changeAnswer(answer.target.value)
  //   console.log(`selectedAnswer ${this.context.selectedAnswer}`)
  // }

  componentWillUnmount() {
    this.context.resetQuestionId()
  }

  renderAnswers = question => {
    const answers = []
    for(let i = 1; i <= 4; i++) {
      if (question['answer_' + i]) {
      answers.push(
        <label key={i} htmlFor="answer">
          <input 
            type="radio" 
            className="answer-option" 
            name="answer" 
            value={i} 
            // checked={this.context.selectedAnswer === question['answer_' + i]} 
            // onChange={this.handleAnswerChange}
          />
            {question['answer_' + i]}
        </label>)
      }
    }
    return answers
  }

  render(){
    const { error, questions } = this.context
    const question = questions.find(q => q.id === this.context.questionId)
    let button
    if (error) {
      return (error.error === `Question doesn't exist`)
        ? <p className="red">Question not found</p>
        : <p className="red">There was an error</p>
    } else if (!question) {
      return <div className="loading">loading...</div>
    } else if (question.id === 5) {
      button = <button className="quiz-submit" type="submit" >Submit Quiz</button>
    } else {
      button = <button className="quiz-next" type="submit" >Next</button>
    } 
    return(
      <div className="quiz">
       <h1>{question.question}</h1>
       <form className="answer-list" onSubmit={this.handleNextPress}>
        {this.renderAnswers(question)}
        {button}
       </form>
      </div>
    )
  }
}