import {combineReducers} from 'redux';
import UsersData from './reducer-user.js';
import Countries from './reducer-country.js'
const allReducers = combineReducers({
  Users : UsersData,
  Country : Countries
});

export default allReducers;
