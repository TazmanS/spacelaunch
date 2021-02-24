import {
  GET_ALL_LAUNCHES, 
  GET_NEXT_TEN_LAUNCHES
} from '../actions/actionTypes'

const initialState = {
  count: 1,
  launches: [],
  load: false
}

export const launches = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LAUNCHES:
      return {
        ...state,
        count: action.count,
        launches: action.res
      }
    case GET_NEXT_TEN_LAUNCHES: {
      return {
        ...state,
        count: action.count,
        launches: [...state.launches, ...action.res]
      }
    }

    default:
      return {
        ...state
      }
  }
}