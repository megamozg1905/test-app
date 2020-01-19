import axios from 'axios';

import { GET_FORM, SET_VALUE, POST_DATA, CANCEL_SEND, POST_COMPLETE, INITIALIZE_SESSION } from './types';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getForm = () => dispatch => {
    axios.get(proxyurl + 'http://test.clevertec.ru/tt/meta', {
            headers: {
                'Access-Control-Allow-Origin': true,
            },
        })
        .then(response =>
            dispatch({
                type: GET_FORM,
                payload: response.data
            }));
};

export const setValue = payload => ({
    type: SET_VALUE,
    payload
});

export const postData = (form, source) => dispatch => {
    dispatch({
        type: POST_DATA
    });
    axios.post(proxyurl + 'http://test.clevertec.ru/tt/meta', { form }, {
        cancelToken: source.token
    }).then(res => {
        dispatch({
            type: POST_COMPLETE,
            payload: res.data
        });
        alert("Отправка завершена");
    })
};

export const cancelSend = (source) => dispatch => {
    source.cancel();
    alert("Отправка отменена");
    dispatch({
        type: CANCEL_SEND
    });
};

export const initializeSession = () => ({
    type: INITIALIZE_SESSION,
});