import ActionTypes from '../../constants/ActionTypes';

export const getRoadster = roadster => {
    return {
        type: ActionTypes.GET_ROADSTER,
        payload: roadster
    };
};
