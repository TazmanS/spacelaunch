import {GET_ONE_LAUNCH_BY_ID} from '../actions/actionTypes'

const initialState = {
  launch: {
    name: '',
    net: '',
    vidURLs: [''],
    mission: {
      type: '',
      orbit: '',
      orbit_abbrev: '',
      description: ''
    },
    // pad: {
    //   location: {
    //     name: ''
    //   },
    //   latitude: 1,
    //   longitude: 2
    // },
    rocket: {
      configuration: {
        id: '',
        name: '',
        family: '',
        variant: '',
        description: ''
      }
    }
  }
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