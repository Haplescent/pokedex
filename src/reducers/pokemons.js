import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE
} from '../actions/pokemons'

const initialState = {
  byId: {},
  allIds: [],
  isFetched: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMONS_SUCCESS:
      action.payload.results.forEach(item => {
        const { url } = item
        const id = url.substring(34, url.length - 1)

        state.byId[id] = {
          id,
          ...item
        }

        state.allIds.push(id)
      })

      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        isFetched: false
      }

    default:
      return state
  }
}
