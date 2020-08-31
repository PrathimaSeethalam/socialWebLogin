import ActionTypes from '../../constants/ActionTypes';

export const getHistory = history => {
    return {
        type: ActionTypes.GET_HISTORY,
        payload: history
    };
};
