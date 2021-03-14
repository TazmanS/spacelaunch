import axios from 'axios'
import { 
  GET_ALL_LAUNCHES, 
  GET_NEXT_TEN_LAUNCHES,
  SET_ERROR
} from './actionTypes'
import {TEN_LAUNCHES, ANOTHER_TEN_LAUNCHES} from './urls'

export const getFirsTenLaunches = () => {
  return async dispatch => {
    try {
      await axios.get(TEN_LAUNCHES)
        .then(res => {
          dispatch({
            type: GET_ALL_LAUNCHES,
            count: 1,
            res: res.data.results,
          })
        })
    } catch (e) {
      dispatch({
        type: SET_ERROR
      })
    }
  }
}

export const getNextTenLaunches = count => {
  return async dispatch => {
    try {
      await axios.get(ANOTHER_TEN_LAUNCHES + count + '0')
        .then(res => {
          dispatch({
            type: GET_NEXT_TEN_LAUNCHES,
            count: count + 1,
            res: res.data.results
          })
        })
    } catch (e) {
      dispatch({
        type: SET_ERROR
      })
    }
    
  }
}