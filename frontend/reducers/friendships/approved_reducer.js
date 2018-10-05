import { RECEIVE_ALL_FRIENDSHIPS, REQUEST_FRIEND, RECEIVE_FRIEND, REMOVE_FRIEND } from '../../actions/friendship_actions';

const approvedReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDSHIPS:
      const allShips = Object.values(action.friendships);
      const aprobado = Object.assign({}, state);
      allShips.forEach((ship) => {
        if (ship.status === 'approved') {
          aprobado[ship.id] = ship;
        }
      })
      return aprobado;
    case RECEIVE_FRIEND:
      const stateNew = Object.assign({}, state, {[action.friendship.id]: action.friendship});
      return stateNew;
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state);
      delete newState[action.friendship.id];
      return newState;
    default:
      return state;
  }
};

export default approvedReducer;
