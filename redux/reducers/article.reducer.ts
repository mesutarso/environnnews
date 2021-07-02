import { AnyAction } from 'redux'
import { GET_ARTICLE, LOAD_ARTICLE, ERROR_GET_ARTICLE } from '../types/article.type'

const initialState = {
  data: [],
  loading: false,
  errMsg: "",
}

const ReducerArticle = (state = initialState, action:  AnyAction) => {
  switch (action.type) {
    case LOAD_ARTICLE:
      return {
        ...state,
        loading: true,
        errMsg: "",
      }

    case ERROR_GET_ARTICLE:
      return {
        ...state,
        loading: false,
        errMsg: "erreur de recuperation"
      }

    case GET_ARTICLE:
      return {
        ...state,
        loading: false,
        errMsg: "",
        data: action.payload
      }
  
    default:
      return state;
  }
}

export default ReducerArticle;