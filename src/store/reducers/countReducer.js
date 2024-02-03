// Reducer function for the counter functionality
const initialState = {
  count: 100,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default countReducer;
