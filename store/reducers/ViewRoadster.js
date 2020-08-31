import ActionTypes from '../../constants/ActionTypes';

const addRoadsterState = {
    roadster: []
};

export const addRoadster = (state = addRoadsterState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ROADSTER:
            console.log('ROADSTER are', action.payload);
            return {
                ...state,
                roadster: action.payload
            };

        default:
            return state;
    }
};
