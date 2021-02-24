import {combineReducers} from 'redux'
import {launches} from './launches'

const reducers =  combineReducers({
  launches: launches
})

export default reducers
