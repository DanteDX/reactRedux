import axios from 'axios';

export const fetchtitledataaction = () => async dispatch =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response);
        const data = response.data;
        dispatch({
            type:'FETCH_TITLE_DATA',
            payload:data
        })
    }catch(err){
        console.log(err)
    }
}