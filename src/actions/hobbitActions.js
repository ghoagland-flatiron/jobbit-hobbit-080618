/*----------------------ACTION CREATORS-----------------------*/
export const selectHobbit = (hobbit) => ({ type: 'SELECT_HOBBIT', payload: hobbit })

export const editHobbit = (hobbit) => ({ type: 'EDIT_HOBBIT', payload: hobbit })


export const updateHobbit = (hobbit, gooble, hello) => {
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
    .then((res) => dispatch(editHobbit(res)))
    .catch(console.error)
  }
}
