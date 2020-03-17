import React from 'react'
import { Link } from 'react-router-dom'
import PlantsApiService from '../../services/plants-api-service'
import QuizContext from '../../contexts/QuizContext'
import './Results.css'

export default class Results extends React.Component {
  
  static contextType = QuizContext

  componentDidMount() {
    this.context.clearError()
    
    const querys = [this.firstAnswer(), this.secondAnswer(), this.thirdAnswer(), this.fourthAnswer(), this.fifthAnswer()]
    
    PlantsApiService.getPlants(querys)
      .then(this.context.setPlants)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearPlants()
    console.log(this.context.plants)
  }

  firstAnswer = () => {
    const answer1 = this.context.answers[0]

    let answer = ''
    if (answer1 === "1") {
      answer = 'high'
    } else if (answer1 === "2") {
      answer = 'medium'
    } else if (answer1 === "3") {
      answer = 'low'
    } else if (answer1 === "4") {
      answer = 'none'
    }
    return answer 

  }

  secondAnswer = () => {
    const answer2 = this.context.answers[1]

    let answer = ''
    if (answer2 === "1") {
      answer = 'yes'
    } else if (answer2 === "2") {
      answer = 'no'
    }
    return answer

  }

  thirdAnswer = () => {
    const answer3 = this.context.answers[2]

    let answer = ''
    if (answer3 === "1") {
      answer = 'high'
    } else if (answer3 === "2") {
      answer = 'medium'
    } else if (answer3 === "3") {
      answer = 'light'
    } 
    return answer

  }

  fourthAnswer = () => {
    const answer4 = this.context.answers[3]

    let answer = ''
    if (answer4 === "1") {
      answer = 'tabletop'
    } else if (answer4 === "2") {
      answer = 'small'
    } else if (answer4 === "3") {
      answer = 'medium'
    } else if (answer4 === "4") {
      answer = 'large'
    } 
    return answer

  }

  fifthAnswer = () => {
    const answer5 = this.context.answers[4]

    let answer = ''
    if (answer5 === "1") {
      answer = 'beginner'
    } else if (answer5 === "2") {
      answer = 'intermediate'
    } else if (answer5 === "3") {
      answer = 'advanced'
    } 
    return answer
  
  }

  handleAddWish = e => {
    //how do I know what userId is?
    const { userId } = 1
    //target is being a butt
    const { plantId } = e.target.id
    console.log(plantId)
    PlantsApiService.postWish(userId, plantId)
      .catch(this.context.setError)
  }

  handleQuizButton = e => {
    e.preventDefault()
    this.props.history.push('/quiz')
  }

  renderResults = result => {
    const plants = this.context.plants
    
    const plantsArray = []
    if(!Array.isArray(plants) || !plants.length) {
      plantsArray.push(<h2>No plants found matching you :(</h2>)
    } else {
      for(let i = 0; i < plants.length ; i++ ) {
        console.log(plants[i].id)
        plantsArray.push(
          <div className="plant-results" >
            <img src={`https://${plants[i].photo}`} alt={plants[i].sci_name} />
            <h2>{!plants[i].cmn_name ? plants[i].sci_name : plants[i].cmn_name}</h2>
            <ul>
              <li>also known as: {plants[i].sci_name}</li>
              <li>likes: {plants[i].light} light | {plants[i].water} water</li>
              <li>good for {plants[i].care_level} plant parents</li>
              <li>pet safe? {plants[i].pet_safe}</li>
              <li>good for a {plants[i].size} space</li>
            </ul>
            <button className="wishlist-button" id={plants[i].id} onClick={this.handleAddWish}>add to my wishlist</button>
          </div>
        )
      }
    }
    return plantsArray
  }

  render(){
    const { plants, error } = this.context
    let content 
    if (error) {
      content = (error.error === `Question doesn't exist`)
        ? <p className="red">Question not found</p>
        : <p className="red">There was an error</p>
    } else if (!plants) {
      content = <div className="loading">loading...</div>
    }
    return(
      <div className="results">
        <h1>Some plants for you!</h1>
        <p>If you fancy one, add it to your wish list!</p>
        {content}
        {this.renderResults()}
        <button className="quiz-restart" onClick={this.handleQuizButton}>Match me with more plants</button>
      </div>
    )
  }
}