export default function rootReducer(state={}, action){
  switch(action.type){
    case 'TURN_OFF_ANIMATION':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};