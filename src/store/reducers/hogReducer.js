import hogs from '../data/porkers_data'

const initialState = hogs // an array

const hogReducer = (state = initialState, action) => {
  console.log('IN HOG REDUCER')
  switch(action.type) {
    // case ('EDIT_HOBBIT'): {
    //
    //   console.log(action, 'IN THE HOG REDUCER???? WHYYYYYYYYYYYYY');
    // }

    case ("FILTER_HOGS") : {
      return action.payload //{...state, hogs: action.payload}
    }
    default:
      return state
  }
}

export default hogReducer
