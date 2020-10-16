export const cleardataaction = () => dispatch =>{
    dispatch({
        type:'CLEAR_POST_DATA'
    })
    dispatch({
        type:'CLEAR_TITLE_DATA'
    })
}