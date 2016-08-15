import { ActionTypes } from '../actions';

const ErrReducer = (state = { message: '' }, action) => {
  switch (action.type) {
    case ActionTypes.ERROR_MESSAGE:
      return { message: action.message };
    default:
      return state;
  }
};

export default ErrReducer;
