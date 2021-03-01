import {GET_EVENTS, SET_ERROR} from './actionTypes'
import axios from 'axios'

export const getEvents = () => {
  return async dispatch => {
    try {
      await axios.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/')
        .then(res => {
          dispatch({
            type: GET_EVENTS,
            payload: res.data.results
          })
        })


    } catch (e) {
      dispatch({
        type: SET_ERROR
      })
    }
  }
}