import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import home from './home/reducer'
import production from './production/reducer'

// combineReducers的作用是将多个reducer文件合并成一个reducer文件
const store = createStore(
    combineReducers({...home,...production}),
    applyMiddleware(thunk)
);

export default store;