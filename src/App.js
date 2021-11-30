import axios from 'axios';
import e from 'cors';
import React from 'react';

import User from './components/User';

class App extends React.Component {
  state = {
    handle: "",
    userData: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/morgankj`)
      .then(res => {
        this.setState({
          ...this.state,
          userData: res.data
        });
      })
      .catch(err => console.error(err));
  }

  onChange = event => {
    this.setState({
      ...this.state,
      handle: event.target.value
    })
  }

  onClick = event => {
    event.preventDefault();
    axios.get("https://api.github.com/users/morgankj/followers")
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data,
          handle: ""
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div id="App">
        <header>
          <h1>GITHUB INFO</h1>
          <form>
            <input onChange={this.onChange} value={this.state.handle} />
            <button onClick={this.onClick} >SEARCH</button>
          </form>
        </header>
        <User userData={this.state.userData} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
