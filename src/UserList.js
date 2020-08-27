import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User'

class UserList extends Component {

	state = {
		showGamesPlayed: false,
	}


	toggleShow = () => {
		this.setState(curState => ({ showGamesPlayed: !curState.showGamesPlayed, }));
	};

	render() {

		//const { showGamesPlayed } = this.state;
		const { userData } = this.props;

		const buttonNumGame = (
			<div>
				<button onClick={this.toggleShow}>
					{this.state.showGamesPlayed ? "Hide" : "Show"} Number of Games Played
		</button>
			</div>
		)

		console.log(this.state.showGamesPlayed);

		return (
			<div className="UserList">

				<p className="GameboardList">Gameboard List</p>

				{userData && userData.length > 0 ? buttonNumGame : ""}


				<ol>

					{userData.map(data => <User userData={data} showGamesPlayed={this.state.showGamesPlayed} />)}

				</ol>

			</div>
		)
	}


}

UserList.propTypes = {
	userData: PropTypes.array.isRequired,
};

export default UserList;