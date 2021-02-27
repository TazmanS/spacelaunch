import { GET_EVENT } from './actionTypes'
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
      console.log(e)
    }
  }
}