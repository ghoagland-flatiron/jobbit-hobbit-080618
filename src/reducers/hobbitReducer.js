// import hobbits from '../data/hobbit_data'

const initialHobbitState = {
  hobbits: [],
  selectedHobbit: {}
}


const reducer = (hobbitInfoState = initialHobbitState, action) => {
  console.log('ACTION: ', action, 'STATE: ', hobbitInfoState)
  switch (action.type) {
    case('SELECT_HOBBIT'): {
      return { ...hobbitInfoState, selectedHobbit: action.payload }
    }

    case('LOAD_HOBBITS'): {
      return { ...hobbitInfoState, hobbits: action.payload }

    }

    case('EDIT_HOBBIT'): {
      const newHobbits = hobbitInfoState.hobbits.map(hob => {
        if(hob.id === action.payload.id) {
          return { ...hob, ...action.payload }
        } else {
          return hob
        }
      })
      return { ...hobbitInfoState, hobbits: newHobbits }
    }
    default:
      return hobbitInfoState
  }
}

export default reducer
