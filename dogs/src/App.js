import React, { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import './App.css';

const apiURL = ('https://dog.ceo/api/breeds/image/random')

class App extends Component {
  state = {
    dogImage: [],
    gotData: false,
  }

  handleChange = (event) => {
    fetch(apiURL)
      .then(response => response.json())
      .then(myData =>
        this.setState({
          dogImage: myData,
          gotData: true
        }))
  }


  render() {
    const gotData = this.state.gotData

    return (
      <div className="App">
        <Header />
        <div className='boneButton'>
          <button onClick={this.handleChange}></button>
        </div>
        <div>
          {gotData
            ?
            <Body image={this.state.dogImage.message} />
            : <h2>Click the bone to see a pup!</h2>
          }
        </div>
      </div>
    )
  }
}

export default App
