export const testReducer = (state,action) =>{
    const {type,payload} = action;
    switch(type){
        case 'ADD':
            return[
                ...state,
                payload
            ]
        default:
            return state;
    }
}