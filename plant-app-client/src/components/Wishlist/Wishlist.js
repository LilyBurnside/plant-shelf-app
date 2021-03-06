import React from 'react'
import PlantsApiService from '../../services/plants-api-service'
import './Wishlist.css'

export default class Wishlist extends React.Component {

  state = { 
    error: null,
    wishlist: []
  }

  componentDidMount() {
    this.setState({ error: null })

    PlantsApiService.getWishlist()
      .then(this.setWishlist)
      .catch(res=> {
        this.setState({error: res.error})
      })     
  }

  setWishlist = wishlist => {
    this.setState({ wishlist })
  }

  handleQuizButton = e => {
    e.preventDefault()
    this.props.history.push('/quiz')
  }

  handleDeleteButton = (id, e) => {
    e.preventDefault()
    const plantId = id

    PlantsApiService.deleteWish(plantId)
      .then(() => {this.setState({ wishlist: this.state.wishlist.filter(w => w.id !== plantId)})})
      .catch(res=> {
        this.setState({error: res})
      })
  }

  renderWishlist() {
    const wishlist = this.state.wishlist

    const wishlistArray = []
    if(!Array.isArray(wishlist) || !wishlist.length) {
      wishlistArray.push(
        <div className="no-wishes">
          <h2>Nothing here yet, take the quiz to add a plant!</h2>
        </div>
      )
    } else {
      for(let i = 0; i < wishlist.length ; i++) {
        // console.log(wishlist[i].id)
        wishlistArray.push(
          <div className="plant">
            <img src={`${wishlist[i].photo}`} alt={wishlist[i].sci_name} />
            <h2 key={i}>{!wishlist[i].cmn_name ? wishlist[i].sci_name : wishlist[i].cmn_name}</h2>
            <p>Also known as: {wishlist[i].sci_name}</p>
            <p>Try to find it from these online sources:</p>
            <a href="https://www.gabriellaplants.com/">Gabriella Plants</a>
            <a href="https://stevesleaves.com/">Steve's Leaves</a>
            <button className="delete" onClick={(e) => this.handleDeleteButton(wishlist[i].id, e)}>Delete plant</button>
          </div> 
        )
      }
    }
    return wishlistArray

  }

  render() {
    return(
      <div className="wishlist">
        <h1>Your Future Plants</h1>
        <p>Wishlisted plants live here until you find them!</p>
        <div className="wishlist-plant-list">
          {this.renderWishlist()}
        </div>
        <button className="quiz-restart" onClick={this.handleQuizButton}>Match me with more plants</button>
      </div>
    )
  }
}
