import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
    name: "Chisom",
    balance: 20000.30
};

const store = createStore(rootReducer, initialState);

export default store;