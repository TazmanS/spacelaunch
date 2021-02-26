import {GET_ONE_LAUNCH_BY_ID} from './actionTypes'
import axios from 'axios'

export const getOneLaunch = (id) => {
  return async dispatch => {
    try {
      await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/${id}`)
        .then(res => {
          dispatch({
            type: GET_ONE_LAUNCH_BY_ID,
            payload: res.data
          })
        })
    } catch (e) {
      console.log(e)
    }
  }
}