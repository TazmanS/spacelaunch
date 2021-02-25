import {GET_EVENTS} from './actionTypes'
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
      console.log(e)
    }
  }
}