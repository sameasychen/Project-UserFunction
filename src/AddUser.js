import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddUser extends Component {
  state={
    user:
      {
  		firstName: '',
    	lastName: '',
    	userName: '',
      },
    userExists: false,
    
  	};

   handleChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

	inputIsEmpty = () =>{
		return this.state.firstName==='' ||this.state.lastName===''|| this.state.noGame===''
	}

	contactExists = currUsername => {
    const users = this.props.userData;
    for (let user of users) {
      console.log("user: "+user);
      console.log("currUsername: "+currUsername);
      if (user.userName === currUsername) {
        
        return true;
      }
    }
      return false;
  	};

	addUser =event =>{
    	event.preventDefault();
      	
      const userExists = this.contactExists(this.state.user.userName);
      console.log("this.state.userName: "+this.state.user.userName);
      
      if(!userExists){
      	this.props.onAddUser(this.state.user);
    	};
      
      this.setState(() => ({userExists,}));
      
      
	}
  
    render() {
      
      //const { firstName, lastName, username } = this.state.user;
		console.log("userExists: "+this.state.userExists);

      return(
      <form onSubmit={this.addUser}>
		<input
			type="text"
			placeholder="First Name"
       		name="firstName"
			value={this.state.firstName}
			onChange={this.handleChange}
		/>
		<input
			type="text"
			placeholder="Last Name"
			name="lastName"
			value={this.state.lastName}
			onChange={this.handleChange}
		/>
		<input
			type="text"
			placeholder="User Name"
			name="userName"
			value={this.state.userName}
			onChange={this.handleChange}
		/>
		<button disabled={this.inputIsEmpty()}>Add</button>

		{this.state.userExists ? (<p className="error">You cannot add a user that already exists.</p>) : ('')}

		<hr></hr>
		</form>



		
	  
        )
    }
  
}

AddUser.propTypes = {
	onAddUser: PropTypes.func.isRequired,
 	userData: PropTypes.array.isRequired,
};

export default AddUser;