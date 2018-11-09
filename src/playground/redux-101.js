import { createStore } from 'redux';

// action generator - used to create our actions objects
// quick test with default parameters
const test = ( a = 1 ) => {
    console.log(a + 10);
}

test(20);

const incrementBy = ( { incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
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
            const set = action.count ? action.count : state.count;
            return {
                count: set
            };

        default:
        return state;
    }
});


store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: 10 }));

//USING OUR GENERATOR
store.dispatch(incrementBy());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementBy({ decrementBy: 10 }));

store.dispatch(decrementBy());

store.dispatch({
    type: 'SET',
    count: 101
});




