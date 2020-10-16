const initialState = {
    titleData:[]
}

export default function(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case 'FETCH_TITLE_DATA':
            return{
                ...state,
                titleData:[...state.titleData,...payload]
            }
        case 'CLEAR_TITLE_DATA':
            return{
                titleData:[]
            }
        default:
            return state;
    }
}