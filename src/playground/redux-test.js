import { createStore } from 'redux';

// payload = { incrementBy: 10 } = const { incrementBy }
// const test = {
//     incrementBy: 10
// };

// const { incrementBy: increment } = test;
// console.log(increment)

const incrementBy = ({ incrementBy } = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return { count: 0 };

        default:
            return state;
    }
});

console.log(store.getState());

store.dispatch(incrementBy({ incrementBy: 10 }));

console.log(store.getState())

store.dispatch({
    type: 'RESET'
});


console.log(store.getState())
