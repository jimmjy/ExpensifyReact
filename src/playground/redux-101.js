import { createStore } from 'redux';

// action generator - used to create our actions objects
// quick test with default parameters
const test = ( a = 1 ) => {
    console.log(a + 10);
}

test(20);

// increment count action generator
const incrementCount = ( { incrementBy = 1 } = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy
});

//alternate method but more code, arguable easier to understand
const incrementCountTwo = (payload = {}) => {

    const incrementBy = typeof payload.incrementBy === 'number' ? payload.incrementBy : 1;

    return {
        type: 'INCREMENT',
        incrementBy
    }
};

// decrement count action generator
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// Reset count action generator
const resetCount = () => ({ type: 'RESET' });

// Set the count action generator

const setCount = ( { count } ) => ({
    type: 'SET',
    count
});

// reducer
// 1. Reducers are pure functions
// basically means the output is determined by the input because it doesn't change anyhting outside the scope of the function but only also uses what is passed to it.
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count: action.count
            };

        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

//test with second method
store.dispatch(incrementCountTwo({ incrementBy: 22 }));
store.dispatch(incrementCountTwo());

//USING OUR GENERATOR
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));




