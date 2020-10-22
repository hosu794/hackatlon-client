import React from 'react'
import PropTypes from 'prop-types'

 function ClearErrorButton({children}) {
    return (
        <div>
            <button>
                {children}
            </button>
        </div>
    )
}

ClearErrorButton.propTypes = {
    children: PropTypes.string.isRequired
}


export default ClearErrorButton;