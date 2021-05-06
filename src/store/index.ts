import {createStore} from 'redux';

const defaultState = {}
type mainAction = {
  type  : string
  payload : any
}
const reducer = (state = defaultState, action : mainAction) => {
  switch (action.type) {

    default:
      return state
  }
}
export const store = createStore(reducer);
