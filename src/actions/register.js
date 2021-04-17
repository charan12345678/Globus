import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register = ({ username, email, password, role }) => async dispatch => {

    try {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ username, email, password, role });
        const res = await axios.post('http://ec2-18-191-239-173.us-east-2.compute.amazonaws.com:9000/users',body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log(err.response.data);
       /* dispatch({
           type: REGISTER_FAIL
        }); */
    }
};