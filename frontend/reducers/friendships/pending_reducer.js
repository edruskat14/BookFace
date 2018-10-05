import { RECEIVE_ALL_FRIENDSHIPS, REQUEST_FRIEND, RECEIVE_FRIEND, REMOVE_FRIEND } from '../../actions/friendship_actions';

const pendingReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_FRIENDSHIPS:
      const allShips = Object.values(action.friendships);
      const esperando = Object.assign({}, state);
      allShips.forEach((ship) => {
        if (ship.status === 'pending') {
          esperando[ship.id] = ship;
        }
      })
      return esperando;
    case REQUEST_FRIEND:
      return Object.assign({}, state, { [action.friendship.id]: action.friendship });
    case RECEIVE_FRIEND:
      const stateNew = Object.assign({}, state);
      delete stateNew[action.friendship.id];
      return stateNew;
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state);
      delete newState[action.friendship.id];
      return newState;
    default:
      return state;
  }
};

export default pendingReducer;
