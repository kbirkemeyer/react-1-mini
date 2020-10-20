import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture = (value) =>{
    this.setState({
      picture: value
    });
  }

  updateName = (value) =>{
    this.setState({
      name: value
    });
  }

  addFriend = () => {
    const {name, picture, friends} = this.state;
    this.setState({
      friends: [...friends, {name, picture}],
      name: '',
      picture: ''
    })
  }

  render() {
    let mapFriends = this.state.friends.map(element => {
      return <div>
        <img width="200px" src={element.picture}/> 
        <span>{element.name}</span>
      </div>
    })
    return (
      <div>
        <span>Name:</span>
        <input placeholder="name..." value={this.state.name} onChange={e => this.updateName(e.target.value)}/>
        <span>Picture:</span>
        <input placeholder="image url..." value={this.state.picture} onChange={e => this.updatePicture(e.target.value)}/>
        <button onClick={() => this.addFriend}> Add Friend </button>
        {mapFriends}
      </div>
    )
  }
}

export default App;
