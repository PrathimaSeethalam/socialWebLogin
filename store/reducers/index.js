import { combineReducers } from 'redux';

import { addUser } from './AddUserRole';
import { addCapsules } from './ViewCapsules';
import { addHistory } from './ViewHistory';
import { addRoadster } from './ViewRoadster';

export default combineReducers({
    addUser: addUser,
    addCapsules: addCapsules,
    addHistory: addHistory,
    addRoadster: addRoadster
});
