import {combineReducers} from 'redux'
import {launches} from './launches'
import {events} from './events'
import {launch} from './launch'
import {rocket} from './rocket'
import {event} from './event'

const reducers =  combineReducers({
  launches: launches,
  events: events,
  event: event,
  launch: launch,
  rocket: rocket
})

export default reducers
