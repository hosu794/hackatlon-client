import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function PathRedirectButton({ id, image }) {

    const link = `/task/path/${id}`;

   return(
     <div>
       <Link to={link}>  
         <img src={image} alt=""/>
        </Link>
     </div>
   )

}

PathRedirectButton.propTypes = {
  id: PropTypes.number.isRequired
}

export default PathRedirectButton;