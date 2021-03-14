import {GET_ONE_LAUNCH_BY_ID, SET_ERROR} from './actionTypes'
import {LAUNCH_URL} from './urls'
import axios from 'axios'

export const getOneLaunch = (id) => {
  return async dispatch => {
    try {
      await axios.get(LAUNCH_URL + id)
        .then(res => {
          dispatch({
            type: GET_ONE_LAUNCH_BY_ID,
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