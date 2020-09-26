import React from 'react';
import ClassContainer, {MyNewContext} from './classContainer';
import ClassC from './classC';
class ClassB extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
    }

    render(){
        return(
                   <React.Fragment>
                <div className="classB">
                    here is classB
                    <div>
                    <ClassC />
                    </div>
                </div>
                </React.Fragment>
        )
}

}


export default ClassB;