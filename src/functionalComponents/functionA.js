import React, { useContext } from 'react';
import { MyFunctionContext } from './functionContainer';


const FunctionA=(props)=>{
       const functionAContext=useContext(MyFunctionContext) ;
       const handleChangeName=(e)=>{
           functionAContext.setName(e.target.value);
       }
       const handleChangeAge=(e)=>{
           functionAContext.setAge(e.target.value);
       }
    return(
        <div className="classA">
            <div className="Name">
                        <label>Name</label>
                        <input onChange={(e)=>handleChangeName(e,"name")}/>
                    </div>
                    <div className="Name">
                        <label>Age</label>
                        <input onChange={(e)=>handleChangeAge(e,"age")} />
            </div>
        </div>
    )
}

export default FunctionA;