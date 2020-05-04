import React from "react";
import {connect} from 'react-redux';

class CounterTest extends React.Component{



    render() {

        return(
        <div>counter is : {this.props.counter}
             <button onClick={this.props.increment1} >+</button>
             <button onClick={this.props.decrement1} >-</button>
        </div>)

    }

}

const statetoprops=(state)=>{
    return {
        counter:state.counter
    }
}

const dispacher=(dispatch)=>{
    return {
        increment1:()=>dispatch({type:'increment'}),
        decrement1:()=>dispatch({type:'decrement'})
    }
}

export default connect(statetoprops,dispacher)(CounterTest)