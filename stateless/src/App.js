import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Text from './Text'

class App extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    axios
      .get(
        'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=55f28ef59ccdf915c2e6ebda6626f3f8&limit=10&format=json'
      )
      .then(response => {
        // console.log(response.data.albums.album)
        this.setState({
          data: response.data.albums.album
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <div className='App'>

        {this.state.data.map((el, i) => {
          return <Text data={el.name} key={i} />
        })}

      </div>
    )
  }
}

export default App
