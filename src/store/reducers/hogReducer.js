// import hogs from '../data/porkers_data'

const initialState = [] // IS AN ARRAY

const reducer = (state = initialState, action) => {
  // console.log('IN HOG REDUCER', action)
  switch(action.type) {
    case('POP_HOG'): {
      return [...state.slice(0, -1)]
    }

    case('GET_HOGS'): {
      // return {...state, hogs: action.payload } BADDDDDDDDDDD THIS CHANGES HOW STATE LOOKS
      return action.payload
    }

    // case('SELECT_HOBBIT'):
      // console.log('WHAT ARE YOU DOING THIS IS A HOG REDUCER');

    default:
      return state
  }
}

export default reducer
