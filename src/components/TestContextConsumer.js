import React,{useContext,useEffect} from 'react'
import {TestContext} from '../contexts/TestContext';

export const TestContextConsumer = () => {

    const { test,dispatch } = useContext(TestContext);
    useEffect(()=>{
        console.log('Test Context information');
        console.log(test);
        localStorage.setItem('test',JSON.stringify(test));
        // const localData = localStorage.getItem('test');
        // const bookList = localData ? (<div>{JSON.parse(localData)}</div>) : (<p>no test exist</p>);
    },[test]);
    

    const handleClick = e =>{
        dispatch({
            type:'ADD',
            payload:'Test Book'
        })
    }

    return (
        <div>
            <button onClick={e => handleClick(e)}>ADD books</button>
        </div>
    )
}

export default TestContextConsumer;
