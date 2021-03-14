import {GET_EVENTS, SET_ERROR} from './actionTypes'
import {EVENTS_URL} from './urls'
import axios from 'axios'

export const getEvents = () => {
  return async dispatch => {
    try {
      await axios.get(EVENTS_URL)
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