import React, { useContext } from 'react';
import { MyFunctionContext } from './functionContainer';


const FunctionC=(props)=>{
    const FunctionCContext=useContext(MyFunctionContext);
    return(
        <div>
            <div>
                Class C context Name:{FunctionCContext.name}
            </div>
            <div>
                Class C context Age:{FunctionCContext.age}
            </div>
        </div>
    )
}

export default FunctionC;