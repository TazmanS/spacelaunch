import { GET_ROCKET } from './actionTypes'
import axios from 'axios'

export const getRocket = (id) => {
  return async dispatch => {
    try {

      await axios.get(`https://spacelaunchnow.me/api/3.5.0/config/launcher/${id}/`)
        .then(res => {
          dispatch({
            type: GET_ROCKET,
            payload: res.data
          })
        })

    } catch (e) {
      console.log(e)
    }
  }
}