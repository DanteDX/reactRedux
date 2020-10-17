import React,{createContext,useReducer} from 'react';
import { testReducer } from '../reducers/testReducer';

export const TestContext = createContext();

const TestContextProvider = (props) =>{
    const [test,dispatch] = useReducer(testReducer,[]);

    return(
        <TestContext.Provider value={{test,dispatch}}>
            {props.children}
        </TestContext.Provider>
    )
}

export default TestContextProvider;