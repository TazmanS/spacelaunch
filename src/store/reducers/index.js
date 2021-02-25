import {combineReducers} from 'redux'
import {launches} from './launches'
import {events} from './events'

const reducers =  combineReducers({
  launches: launches,
  events: events
})

export default reducers
