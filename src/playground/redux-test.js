import { createStore } from 'redux';

//increment action generator
const incrementCount = ({ incrementBy = 1} = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ newCount }) => ({
    type: 'SET',
    newCount
});

const resetCount = () => ({ type: 'RESET' });

const store = createStore((state = { count: 0 }, action ) => {
    //swtich - what to do with state based off actions
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return { count: action.newCount };
        case 'RESET':
            return { count: 0 };
        default:
            console.log(action);
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//increment count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

//decrement count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
//set count
store.dispatch(setCount({ newCount: 12 }));

//reset count
store.dispatch(resetCount());

