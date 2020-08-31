import ActionTypes from '../../constants/ActionTypes';

export const getCapsules = capsules => {
    return {
        type: ActionTypes.GET_CAPSULES,
        payload: capsules
    };
};
