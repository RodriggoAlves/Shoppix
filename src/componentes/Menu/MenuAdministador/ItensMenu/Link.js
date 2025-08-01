import React from 'react';
import { Link as ReactRouterLink} from 'react-router-dom'
import './Link.css'

function Link ({text, to, ...props} ) {
    return(

        <ReactRouterLink to={to} className='opcoes-menu'{...props}>
            {text}
        </ReactRouterLink>

    )
}

export default Link;
