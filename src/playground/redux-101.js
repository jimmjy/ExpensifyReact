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


const store = createStore((state = { count: 0 }, action) => {

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
});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

//USING OUR GENERATOR
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));




