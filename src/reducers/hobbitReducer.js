import hobbits from '../data/hobbit_data'

const initialState = {
  hobbits: hobbits,
  selectedHobbit: {}
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SELECT_HOBBIT'): {
      return { ...state, selectedHobbit: action.payload }
    }

    case ('EDIT_HOBBIT'): {
      const newHobbits = state.hobbits.map(hob => {
        if (hob.id === action.payload.id) {
          return action.payload
        }
        else {
          return hob
        }
      })

      return { ...state, hobbits: newHobbits }
    }
    default:
      return state
  }
}

export default reducer
