import { GET_ROCKET, SET_ERROR } from './actionTypes'
import {ROCKET_URL} from './urls'
import axios from 'axios'

export const getRocket = (id) => {
  return async dispatch => {
    try {

      await axios.get(ROCKET_URL + id)
        .then(res => {
          dispatch({
            type: GET_ROCKET,
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