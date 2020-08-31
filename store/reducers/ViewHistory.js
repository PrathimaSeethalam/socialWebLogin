import ActionTypes from '../../constants/ActionTypes';

const addHistoryState = {
    history: []
};

export const addHistory = (state = addHistoryState, action) => {
    switch (action.type) {
        case ActionTypes.GET_HISTORY:
            console.log('HISTORY are', action.payload);
            return {
                ...state,
                history: action.payload
            };

        default:
            return state;
    }
};
