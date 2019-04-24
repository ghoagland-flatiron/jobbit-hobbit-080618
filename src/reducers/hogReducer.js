
const initialState = []


const hogReducer = (hogState = initialState, action) => {
  console.log('IN HOG REDUCER -> HOG STATE: ', hogState, 'ACTION: ', action)
  switch(action.type) {

    case('REMOVE_HOG'): {
      const newHogs = hogState.filter(hog => {
        return hog.id !== action.payload
      })

      return newHogs
    }

    case('ADD_HOG'): {
      return [...hogState, action.payload]
    }

    case 'LOAD_HOBBITS': {
      console.log('IN HOG REDUCER WITH HOBBIT ACTION')
    }
    case('LOAD_HOGS'): {
      return action.payload
    }

    default:
      return hogState
  }
}

export default hogReducer
