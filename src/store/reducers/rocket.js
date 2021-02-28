import {GET_ROCKET} from '../actions/actionTypes'

const initialState = {
  rocket: {
    image_url: '',
    name: '',
    family: '',
    maiden_flight: '',
    description: '',
    variant: '',
    full_name: '',
    alias: '',
    min_stage: '',
    max_stage: '',
    length: '',
    diameter: '',
    launch_mass: '',
    to_thrust: '',
    apogee: '',
    gto_capacity: '',
    
  }
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