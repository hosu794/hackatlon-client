import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function PathRedirectButton({ id }) {

    const link = `/task/path/${id}`;

   return(
     <div>
       <Link to={link}><button>Go to links</button></Link>
     </div>
   )

}

PathRedirectButton.propTypes = {
  id: PropTypes.number.isRequired
}

export default PathRedirectButton;