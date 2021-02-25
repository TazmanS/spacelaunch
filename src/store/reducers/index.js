import {combineReducers} from 'redux'
import {launches} from './launches'
import {events} from './events'
import {launch} from './launch'

const reducers =  combineReducers({
  launches: launches,
  events: events,
  launch: launch
})

export default reducers
