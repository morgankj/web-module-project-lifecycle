import React from 'react';

import User from './components/User';

class App extends React.Component {
  render() {
    return(
      <div id="App">
        <header>
          <h1>GITHUB INFO</h1>
          <form>
            <input />
            <button>SEARCH</button>
          </form>
        </header>
        <User />
      </div>
    );
  }
}

export default App;
