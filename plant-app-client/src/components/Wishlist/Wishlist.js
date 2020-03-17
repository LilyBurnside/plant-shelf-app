import React from 'react'
import PlantsApiService from '../../services/plants-api-service'
// import QuizContext from '../../contexts/QuizContext'

export default class Wishlist extends React.Component {
  // static contextType = QuizContext

  state = { 
    error: null,
    wishlist: []
  }

  componmentDidMount() {
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

  renderWishlist() {
  console.log(this.state.wishlist)
  }

  render() {
    return(
      <div className="wishlist">
        <p>wishlist page</p>
        {this.renderWishlist()}
      </div>
    )
  }
}