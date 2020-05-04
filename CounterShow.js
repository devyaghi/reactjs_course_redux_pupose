import React from "react";
import {connect} from "react-redux";

class CounterShow extends React.Component{

    render() {
        return(<div>your counter value is : {this.props.counter} </div>)
    }

}


const statetoprops=(state)=>{
    return {
        counter:state.counter
    }
}

export default connect(statetoprops)(CounterShow)