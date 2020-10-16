const initialState = {
    postData:[]
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case 'FETCH_POST_DATA':
            return{
                ...state,
                postData:[...state.postData,...payload]
            }
        case 'CLEAR_POST_DATA':
            return{
                postData:[]
            }
        default:
            return state;
    }
}