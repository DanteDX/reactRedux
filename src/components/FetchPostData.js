import React from 'react';
import {fetchpostdataaction} from '../action/fetchpostdataaction';
import {connect} from 'react-redux';

const FetchPostData = ({fetchpostdataaction}) =>{
    fetchpostdataaction().then(function(data){console.log('postdatafectched')});
    return(
        <div className="fetchPostData">
            <h1 style={{textAlign:"center",color:"red",textDecoration:"underline"}}>
                Post Data Fetching Completed
            </h1>
        </div>
    )
}

export default connect(null,{fetchpostdataaction})(FetchPostData);