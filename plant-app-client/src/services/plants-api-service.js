import config from '../config'
import TokenService from './token-service'

const PlantsApiService = {
  getQuestions(){
    return fetch(`${config.API_ENDPOINT}/quiz`)
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getPlants(answers){
    return fetch(`${config.API_ENDPOINT}/results?light=${answers[0]}&pet_safe=${answers[1]}&water=${answers[2]}&size=${answers[3]}&care_level=${answers[4]}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  getWishlist(){
    return fetch(`${config.API_ENDPOINT}/wishlist`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postWish(userId, plantId) {
    return fetch(`${config.API_ENDPOINT}/wishlist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        plant_id: plantId,
        user_id: userId,
      }),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
  
}

export default PlantsApiService