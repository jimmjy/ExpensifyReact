import { createStore } from 'redux';
//First, we need to create a store to hold our state.  This store constant needs to call createStore function to get redux going.  This createStore function, needs to be called with a function passed to it that holds the state as the arguments.

//action generators - functions that return action objects, e.g. { type: 'SET' }
// These are good to avoid errors.  If you mistype the type value, redux won't catch it whereas if you type the name of the function to create the object, you will get and error when trying to call it.

const incrementBy = () => ({ type: 'INCREMENT'});

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                count: state.count - decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            const set = action.count ? action.count : state.count;
            return {
                count: set
            };

        default:
            return state;
    }
});

//actions - these are what allow us to actually change the store
// actions are nothing more than objects that get sent to the store.
//examples of some actions

// I'd like to increment the count
// store.dispatch(); // this allows us to send off an action object to the store 
//this is an action object
// {
//     type: 'INCREMENT'
// }

//to put this all together to increment

// this is how we listen to the store changes of state.  The return value of this is also how we unsubscribe so we set it to a variable

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: 5 }));

store.dispatch(incrementBy());

// I would like to unsubscribe now.  Keep in mind, this does not stop actions from happening to state, it just stops us from listening to them

// unsubscribe();


// reset count
store.dispatch({
    type: 'RESET'
});

// decrement
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});


// The function that we send into the createStore function is called a reducer.

