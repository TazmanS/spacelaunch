import axios from 'axios'
import { 
  GET_ALL_LAUNCHES, 
  GET_NEXT_TEN_LAUNCHES
} from './actionTypes'

export const getFirsTenLaunches = () => {
  return async dispatch => {
    try {
      await axios.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed')
        .then(res => {
          dispatch({
            type: GET_ALL_LAUNCHES,
            count: 1,
            res: res.data.results,
          })
        })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getNextTenLaunches = count => {
  return async dispatch => {
    try {
      await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed&offset=${count}0`)
        .then(res => {
          dispatch({
            type: GET_NEXT_TEN_LAUNCHES,
            count: count + 1,
            res: res.data.results
          })
        })
    } catch (e) {
      console.log(e)
    }
    
  }
}