import { createStore } from 'redux';

//First, we need to create a store to hold our state.  This store constant needs to call createStore function to get redux going.  This createStore function, needs to be called with a function passed to it that holds the state as the arguments.

const store = createStore((state = { count: 0, name: "ajesm", age: 30 }) => {
    return state;
});

console.log(store);