import React from 'react';
import {MyNewContext} from './classContainer';

class ClassA extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <React.Fragment>
                <div className="classA">

                    <div className="Name">
                        <label>Name</label>
                        <input onChange={(e)=>this.props.handleChange(e,"name")}/>
                    </div>
                    <div className="Name">
                        <label>Name</label>
                        <input onChange={(e)=>this.props.handleChange(e,"age")} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ClassA;