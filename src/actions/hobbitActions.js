// ACTION CREATORS
export const selectHobbit = (hobbit) => ({ type: 'SELECT_HOBBIT', payload: hobbit })
export const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit })

export const loadHobbits = (hobbits) => ({ type: 'LOAD_HOBBITS', payload: hobbits })



// THUNK CREATORS

export const patchHobbit = (hobbit) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(hobbit)
    })
      .then(r => r.json())
      .then(res => dispatch(editHobbit(res)))
  }
}


export const getHobbits = () => (dispatch) => (
  fetch('http://localhost:3000/hobbits/')
    .then(r => r.json())
    .then((res) => dispatch(loadHobbits(res)))
)



// patchHobbit = () => {
//   return fetch(`http://localhost:3000/hobbits/${this.state.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify(this.state)
//   })
// }
