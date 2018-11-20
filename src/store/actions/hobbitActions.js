import { update } from './adapter'

/* ---------- ACTION CREATORS ------------- */
const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit})
const getHobbits = (hobbits) => ({ type: 'GET_HOBBITS', payload: hobbits })
export const selectHobbit = (hobbit) => ({type: 'SELECT_HOBBIT', payload: hobbit})


/* ---------- THUNK CREATORS ------------- */
export const updateHobbit = (hobbit) => {
  return (dispatch) => {
    return update(hobbit)
    .then((res) => dispatch(editHobbit(res)))
    .catch(console.error)
  }
}

export const loadHobbits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hobbits/')
      .then(r => r.json())
      .then(res => dispatch(getHobbits(res)))
      .catch(console.error)
  }
}
