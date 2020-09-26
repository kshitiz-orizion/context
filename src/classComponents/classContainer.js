import React from 'react';
import ClassA from './classA';

import ClassB from './classB';

export const MyNewContext=React.createContext();

class ClassContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Kshitiz",
            age:"10",
        }
    }

    handleChange=(e,label)=>{
        this.setState({
            [label]:e.target.value
        })
    }

    render(){
        return(
            <MyNewContext.Provider value={this.state}>
            <React.Fragment>
                <div className="bothClassContainer">
                    <ClassA handleChange={this.handleChange}/>
                    <ClassB/>
                </div>
            </React.Fragment>
            </MyNewContext.Provider>
        )
    }
}

export default ClassContainer;