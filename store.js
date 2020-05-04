import {createStore} from "redux";



const reducer=(state,action)=>{

        switch(action.type){
            case 'increment':return {counter:state.counter+1}
            case 'decrement':return {counter:state.counter-1}
            default:return state;
        }
}


const initialState={
    counter:12
}


export default createStore(reducer,initialState);