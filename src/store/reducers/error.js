import {SET_ERROR, DELETE_ERROR} from '../actions/actionTypes'

const initalState = {
  error: false
}

export const error = (state = initalState, action) => {
  switch (action.type) {
    case SET_ERROR: 
      return {
        ...state,
        error: true
      }
    case DELETE_ERROR: {
      return {
        ...state, 
        error: false
      }
    }
    default: 
      return {
        ...state
      }
  }
}