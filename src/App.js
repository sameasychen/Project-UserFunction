import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';


class App extends Component {
  
  state={

    users: [
    
    	],
  	}

	handleAddUser = user => {
      user.numGamesPlayed = 0;
		this.setState(prevState=> ({users: [...prevState.users, user]}))
	};

  render() {
   
    console.log(this.state.users);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    
    	<AddUser onAddUser={this.handleAddUser} userData={this.state.users}/>
    	

		  <UserList userData={this.state.users}/>
		
		
      </div>
    );
  }
}

export default App;
