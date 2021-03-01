import {SET_ERROR, DELETE_ERROR} from './actionTypes'

export const setError = () => {
  return dispatch => {
    dispatch({
      type: SET_ERROR
    })
  }
}

export const deleteError = () => {
  return dispatch => {
    dispatch({
      type: DELETE_ERROR
    })
  }
}