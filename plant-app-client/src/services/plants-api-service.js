import config from '../config'

const PlantsApiService = {
  getQuestions(){
    return fetch(`${config.API_ENDPOINT}/quiz`)
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  
  getQuestion(questionId) {
    return fetch(`${config.API_ENDPOINT}/quiz/${questionId}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default PlantsApiService