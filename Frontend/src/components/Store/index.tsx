import { TypedUseSelectorHook, useDispatch, useSelector,   } from 'react-redux';
// import { createStore } from 'redux';

// // const redux = require('redux');
// //Reducer Function
// const counterReducer = (state = {counter: 0}, action) =>{
//     if(action.type === 'increment'){
//         return{
//             counter: state.counter + 1,
//         };
//     }

//     if(action.type === 'decrement'){
//         return{
//             counter: state.counter - 1,
//         }
//     }

//     return state;

// }
// //store
// // Store
// const store = createStore(counterReducer);
// //Subscriber creation

// const counterSubscriber = () => {

// const latestState = store.getState()
// console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({type :'increment'});
// store.dispatch({type :'decrement'});


