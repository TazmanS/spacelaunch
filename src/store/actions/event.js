import { GET_EVENT, SET_ERROR } from './actionTypes'
import {EVENT_URL} from './urls'
import axios from 'axios'

export const getEvent = (id) => {
  return async dispatch => {
    try {
      await axios.get(EVENT_URL + id)
        .then(res => {
          dispatch({
            type: GET_EVENT,
            payload: res.data
          })
        })

    } catch (e) {
      dispatch({
        type: SET_ERROR
      })
    }
  }
}