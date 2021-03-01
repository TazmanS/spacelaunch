import { GET_EVENT, SET_ERROR } from './actionTypes'
import axios from 'axios'

export const getEvent = (id) => {
  return async dispatch => {
    try {
      await axios.get(`https://spacelaunchnow.me/api/3.5.0/event/${id}/`)
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