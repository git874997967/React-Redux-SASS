import todos from './todo';
import visibilityFilter from './visibilityFilter';
import {combineReducers} from 'redux'

/* just combin them and provide single interface */
const todoApp = combineReducers({
    todos, visibilityFilter
});
export default todoApp