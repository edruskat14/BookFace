import { ON_MODAL, OFF_MODAL } from '../actions/ui_actions';

let preState = {
  modal: 'off'
}

const uiReducer = (state = preState, action) => {
  switch (action.type) {
    case ON_MODAL:
      return Object.assign({}, state, { modal: 'on' });
    case OFF_MODAL:
      return Object.assign({}, state, { modal: 'off' });
    default:
      return state;
  };
};

export default uiReducer;
