import React, { useEffect,useContext } from 'react';
import FunctionC  from './FunctionC';
import  {MyFunctionContext} from './functionContainer';    

const FunctionB=(props)=>{
    const userContext=useContext(MyFunctionContext);  
    return(
        <div className="classB">
            <div>
            Name:{userContext.name}
            </div>
            <div>
            Age:{userContext.age}
            </div>
            <FunctionC/>
        </div>
    )
}

export default FunctionB;