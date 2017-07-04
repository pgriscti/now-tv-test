import { combineReducers } from 'redux';
import ServiceReducer from './service-reducer';
import UsersReducer from './users-reducer';

const rootReducer = combineReducers({
  service: ServiceReducer,
  users: UsersReducer
});

export default rootReducer;
