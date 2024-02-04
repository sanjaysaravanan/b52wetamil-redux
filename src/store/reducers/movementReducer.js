const initialState = { top: 100, left: 100 };

const movementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "top":
      return {
        ...state,
        top: state.top - 100,
      };
    case "bottom":
      return {
        ...state,
        top: state.top + 100,
      };
    case "left":
      return {
        ...state,
        left: state.left - 100,
      };
    case "right":
      return {
        ...state,
        left: state.left + 100,
      };
    default:
      return state;
  }
};

export default movementsReducer;
