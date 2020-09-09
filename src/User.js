import React from 'react';
import PropTypes from 'prop-types';

const User = props => {

  
   
      return(
        
        <li>
        <span>{props.userData.firstName} (Username: {props.userData.userName} )</span>
		<span> have played {props.showGamesPlayed ? props.userData.numGamesPlayed : ' * '} Games.</span>
		</li>
        
        
        )
   
  

}

User.propTypes = {
	userData: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;