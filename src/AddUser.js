import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddUser extends Component {
  state={
    user:
    {
  	firstName:"",
    lastName:"",
    userName:"",
    }
  	}

   handleChange = event => {
       const { name, value} = event.target

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

	addUser =(event) =>{
    	event.preventDefault();
      	
      	this.props.onAddUser(this.state.user);
      
	}
  
    render() {
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

		</form>
        )
    }
  
}

AddUser.propTypes = {
	onAddUser: PropTypes.func.isRequired,
 	userData: PropTypes.array.isRequired,
};

export default AddUser;