import {GET_ONE_LAUNCH_BY_ID} from '../actions/actionTypes'

const initialState = {
  launch: {}
}

export const launch = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_LAUNCH_BY_ID:
      return {
        ...state,
        launch: action.payload
      }

    default: 
      return {
        ...state
      }
  }
}