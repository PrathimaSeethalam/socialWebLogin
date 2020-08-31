/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

export const getCapsules = capsules => {
    return {
        type: ActionTypes.GET_CAPSULES,
        payload: capsules
    };
};
