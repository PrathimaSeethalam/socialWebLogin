'use strict';
import axios from 'axios';
import ServiceConstants from './ServiceConstants';

export default class userServices {
    static saveUser() {
        return axios.post(ServiceConstants.save_user);
    }
    static saveAdmin() {
        return axios.post(ServiceConstants.save_user);
    }

    static displayHistory() {
        return axios.get(ServiceConstants.display_history);
    }

    static displayCapsules() {
        return axios.get(ServiceConstants.display_capsules);
    }

    static displayRoadster() {
        return axios.get(ServiceConstants.display_roadster);
    }
}
