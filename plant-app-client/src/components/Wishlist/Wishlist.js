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
    console.log(this.state.wishlist)
  }

  setWishlist = wishlist => {
    this.setState({ wishlist })
  }

  handleQuizButton = e => {
    e.preventDefault()
    this.props.history.push('/quiz')
  }

  renderWishlist() {
    const { wishlist } = this.state.wishlist

    const wishlistArray = []
    if(!Array.isArray(wishlist) || !wishlist.length) {
      wishlistArray.push(<h2>Nothing here yet, take the quiz to add a plant!</h2>)
    } else {
      for(let i = 0; i < wishlist.length ; i++) {
        wishlistArray.push(
          <div className="plant">
            <img src={`https://${wishlist[i].photo}`} alt={wishlist[i].sci_name} />
            <h2>{!wishlist[i].cmn_name ? wishlist[i].sci_name : wishlist[i].cmn_name}</h2>
            <p>also known as: {wishlist[i].sci_name}</p>
            <p>try to find it from these online sources:</p>
            <a href="https://www.gabriellaplants.com/">Gabriella Plants</a>
            <a href="https://stevesleaves.com/">Steve's Leaves</a>
            <button className="delete">Delete plant</button>
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
        {this.renderWishlist()}
        <button className="quiz-restart" onClick={this.handleQuizButton}>Match me with more plants</button>
      </div>
    )
  }
}
