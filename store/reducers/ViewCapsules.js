import ActionTypes from '../../constants/ActionTypes';

const addCapsulesState = {
    capsules: []
};

export const addCapsules = (state = addCapsulesState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CAPSULES:
            console.log('capsules are', action.payload);
            return {
                ...state,
                capsules: action.payload
            };

        default:
            return state;
    }
};
