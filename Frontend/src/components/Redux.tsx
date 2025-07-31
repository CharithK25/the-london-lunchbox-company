import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// // import type { RootState, AppDispatch } from './store';


// const redux = require ('redux');


// //Reducer creation
// //counter:0 is giving the initial state as zero.
// const counterReducer =  (state = {counter:0}, action ) => {
//     return{
//         counter: state.counter+1
//     };
// };
//  //Store Creation
// const store = redux.createStore(counterReducer);

// //Subscription creation
// const counterSubscriber = (  ) =>
// {
// const latestState= store.getState(); //Subscriber is reaching out to the store to get the current updated state
// console.log(latestState);
// };


// store.subscribe(counterSubscriber);//this part tells that counterSubscriber function needs to be called whenever the state is updated.


// store.dispatch({type:'increment'});//Used to dispatch and ACTION. ACTION IS JS OBJ WITH A TYPE PROPERTY ACTS AS IDENTIFIER

