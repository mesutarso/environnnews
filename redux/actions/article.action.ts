import axios from 'axios'

import { GET_ARTICLE, LOAD_ARTICLE, ERROR_GET_ARTICLE } from '../types/article.type'

export function get ( uri ){
    return async function action(dispatch) {
        try {
            dispatch({
                type: LOAD_ARTICLE
            })
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/${uri}`)
    
            dispatch({
                type: GET_ARTICLE,
                payload: data.data
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_GET_ARTICLE
            })
        }
    }

}