import React,{useContext, useState} from 'react';
import FunctionA from './functionA';
import FunctionB from './functionB';

export const MyFunctionContext= React.createContext();

const FunctionContainer=(props)=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    return(
        <MyFunctionContext.Provider value={{
            name,age,setName,setAge
        }}>
        <div className="bothClassContainer">
             <FunctionA/>
             <FunctionB/>
        </div>
        </MyFunctionContext.Provider>
    )
}

export default FunctionContainer;