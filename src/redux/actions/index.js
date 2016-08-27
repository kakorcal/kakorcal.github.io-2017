let actions = {
  turnOffAnimation(){
    return {
      type: 'TURN_OFF_ANIMATION',
      payload: {
        siteVisited: true
      }
    };
  }
};

export default actions;