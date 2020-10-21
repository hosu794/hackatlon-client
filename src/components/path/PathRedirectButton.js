import React from 'react'
import { Link } from 'react-router-dom';

function PathRedirectButton({ id }) {

    const link = `/task/path/${id}`;

   return(
     <div>
       <Link to={link}><button>Go to links</button></Link>
     </div>
   )

}

export default PathRedirectButton;