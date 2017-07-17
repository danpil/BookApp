import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/notification';

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      let { notification_type, message } = action;
      return Object.assign({}, state, {
        message,
        notification_type,
      });
    case CLEAR_NOTIFICATION:
      return {};
    default:
      return state;
  }
};
