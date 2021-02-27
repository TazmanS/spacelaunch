import {GET_ROCKET} from '../actions/actionTypes'

const initialState = {
  rocket: {}
}

export const rocket = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET: 
      return {
        ...state,
        rocket: action.payload
      }

    default: 
      return {
        ...state
      }
  }
}