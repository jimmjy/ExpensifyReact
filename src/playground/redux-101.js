import { createStore } from 'redux';

// action generator - used to create our actions objects

const add = ({ a, b }) => {
    return a + b;
};

//above is like saying data = {a:1, b: 2} = {a, b}

console.log(add({ a: 1, b: 2 }));

const incrementBy = (payload = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});


const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
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


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: -2 }));

//USING OUR GENERATOR
store.dispatch(incrementBy({ incrementBy: 5 } ));

store.dispatch({
    type: 'RESET'
});

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




