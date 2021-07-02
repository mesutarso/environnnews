import { combineReducers } from 'redux'

import ReducerArticle from './article.reducer'

const rootRecucers = combineReducers({
    listArticle : ReducerArticle
})

export default rootRecucers