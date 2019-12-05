import { PROCESSING, FETCH_ERROR, FETCH_SUCCESS } from '../constants';

const apis = (state = 'processing', action) => {
  switch (action.type) {
    case PROCESSING:
      return 'processing';
    case FETCH_ERROR:
      return 'error';
    case FETCH_SUCCESS:
      return 'success';
    default:
      return state;
  }
};

export default apis;
