import { GET_EVENT } from '../actions/actionTypes'

const initialState = {
  event: {
    feature_image: '',
    name: '',
    date: '',
    description: '',
    location: '',
    type: {
      name: ''
    }
  }
}

export const event = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      }
    default:
      return {
        ...state
      }
  }
}