import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';


class App extends Component {

  state = {

    users: [
      {
        firstName: 'Mike',
        lastName: 'Sui',
        userName: 'GMING',
        numGamesPlayed: 0,
      }

    ],
  }

  handleAddUser = user => {
    user.numGamesPlayed = 0;
    this.setState(prevState => ({ users: [...prevState.users, user] }))
  };

  render() {

    console.log(this.state.users);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="row mt-5">
          <div className="col-md-5">
            <AddUser onAddUser={this.handleAddUser} userData={this.state.users} />
          </div>
          <div class="midLine"></div>
          <div className="col-md-6">
            <UserList userData={this.state.users} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
