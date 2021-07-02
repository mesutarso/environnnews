import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootRecucers from './reducers'

const store = createStore(rootRecucers, applyMiddleware(thunk))

export default store