import React from 'react';
import {fetchtitledataaction} from '../action/fetchtitledataaction';
import {connect} from 'react-redux';


const FetchTitleData = ({fetchtitledataaction}) =>{
    fetchtitledataaction().then(function(data){console.log('titledatafectched')});
    return(
        <div className="fetchTitleData">
            <h1 style={{textAlign:"center",color:"red",textDecoration:"underline"}}>
                Title Data Fetching Completed
            </h1>
        </div>
    )
}

export default connect(null,{fetchtitledataaction})(FetchTitleData);