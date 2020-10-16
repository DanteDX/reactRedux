import axios from 'axios';

export const fetchpostdataaction = () => async dispatch =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;
        dispatch({
            type:'FETCH_POST_DATA',
            payload:data
        })
    }catch(err){
        console.log(err)
    }
}