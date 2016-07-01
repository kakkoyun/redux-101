// State argument is not application state, it is the state that only this reducer responsible.
// Previous state of this reducer.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // MUST NOT BE undefined
  return state;
}