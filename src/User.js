import React from 'react';
import PropTypes from 'prop-types';

const User = props => {

  
   
      return(
        
        <li>
        <p>Username: {props.userData.userName}</p>
		<p>No.  Games: {props.showGamesPlayed ? props.userData.numGamesPlayed : '*'}</p>
		</li>
        
        
        )
   
  

}

User.propTypes = {
	userData: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;