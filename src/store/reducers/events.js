import {GET_EVENTS} from '../actions/actionTypes'

const initialState = {
  events: []
}

export const events = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      }

    default: 
      return {
        ...state
      }
  }
}