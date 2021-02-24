import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'

export const store = createStore(reducers, applyMiddleware(
  reduxThunk
))

const Store = ({children}) => {
  return( 
    <Provider store={store}>{children}</Provider>
  )
}

export default Store