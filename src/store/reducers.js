import { GET_FORM, SET_VALUE, POST_DATA, CANCEL_SEND, POST_COMPLETE, INITIALIZE_SESSION } from './types';

const initialState = {
    form: {
        state: 0
    },
    data: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FORM:
            {
                return {...state,
                    form: {
                        ...action.payload,
                        state: 1
                    }
                };
            }
        case SET_VALUE:
            return {...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
        case POST_DATA:
            return {...state,
                form: {
                    ...state.form,
                    state: 2
                }
            }
        case CANCEL_SEND:
        case POST_COMPLETE:
            return {...state,
                form: {
                    ...state.form,
                    state: 1
                }
            }
        case INITIALIZE_SESSION:
            return {
                form: {
                    state: 0
                },
                data: {}
            }
        default:
            return state;
    }
}