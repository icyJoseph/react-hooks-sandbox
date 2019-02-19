export const ADD_VISITOR = "add -> visitor";

export const addVisitor = ({ id, message, name, date }) => ({
  type: ADD_VISITOR,
  id,
  message,
  name,
  date
});

export function visitorsReducer(state, { type, ...action }) {
  switch (type) {
    case ADD_VISITOR:
      return [{ ...action }, ...state];
    default:
      return state;
  }
}

export default visitorsReducer;
