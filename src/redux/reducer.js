import {
    ADD_TASK,
    TOGGLE_TASK,
    EDIT_TASK,
    SET_FILTER
  } from "./actions";
  
  const initialState = {
    tasks: [],
    filter: "all"
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
  
      case TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((t) =>
            t.id === action.payload
              ? { ...t, isDone: !t.isDone }
              : t
          )
        };
  
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((t) =>
            t.id === action.payload.id
              ? { ...t, description: action.payload.description }
              : t
          )
        };
  
      case SET_FILTER:
        return {
          ...state,
          filter: action.payload
        };
  
      default:
        return state;
    }
  }
  
  export default reducer;