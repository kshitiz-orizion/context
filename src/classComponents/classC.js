import React from 'react';
import { MyNewContext } from './classContainer';


class ClassC extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <MyNewContext.Consumer>
                {(context)=>(
                    <React.Fragment>
                    <p>Class C name:{context.name}</p>
                    <p>Class C age:{context.age}</p>
                    </React.Fragment>
                )}
            </MyNewContext.Consumer>
        )
    }
}

export default ClassC;