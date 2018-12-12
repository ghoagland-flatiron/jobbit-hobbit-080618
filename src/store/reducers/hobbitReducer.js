// import hobbits from '../data/hobbit_data'

const initialState = {
  hobbits: [],
  selectedHobbit: {}
}


const reducer = (state = initialState, action) => {
  console.log('IN HOBBIT REDUCER', action);
  switch (action.type) {
    case ('SELECT_HOBBIT'): {
      return { ...state, selectedHobbit: action.payload }
    }

    case ('EDIT_HOBBIT'): {
      const newHobbits = state.hobbits.map(hob => {
        if (hob.id === action.payload.id) {
          return { ...hob, ...action.payload }
        }
        return hob
      })

      return { ...state, hobbits: newHobbits }
    }

    case ('GET_HOBBITS'): {
      return { ...state, hobbits: action.payload }
    }

    default:
      return state
  }
}

export default reducer
