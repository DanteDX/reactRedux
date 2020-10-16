import React from 'react'
import {cleardataaction} from '../action/cleardataaction';
import {connect} from 'react-redux';

const ClearData = ({cleardataaction}) => {
    cleardataaction();
    return (
        <div>
            <h1>Redux states are clear. Thanks!</h1>
        </div>
    )
}

export default connect(null,{cleardataaction})(ClearData);
