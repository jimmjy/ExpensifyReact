import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//different reducers needed, 1 for expenses and 1 for filters 
// Add expense
const addExpense = () => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid()
    } 
});

//remove expense
// edit expense

//settextfilter
//sortby value change
//set dates

//Expense reducer state = {count: 1}

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
       
        default:
            return state;
    };
};

// Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};


// store creation
// for the combinedReducers function, we can pass it as an argument to createStore and it accepts an object argument its self that takes in an object with the key(root state name) we want for the reducer and the reducer for the value that manages the key state. Here is where we can put many reducers defined with keys.

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'afadfasd',
        description: 'Jan rent',
        note: 'This was the final payment',
        amount: 54500, //cents
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

