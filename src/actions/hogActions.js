/* ---------- ACTION CREATORS -------------------*/

const loadHogs = (hogs) => ({ type: 'LOAD_HOGS', payload: hogs })
export const removeHog = (id) => ({ type: 'REMOVE_HOG', payload: id })

/* ---------- THUNK CREATORS -------------------*/

export const getHogs = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hogs/')
      .then(r => r.json())
      .then(res => dispatch(loadHogs(res)))
  }
}

export const deleteHog = (id) => (dispatch) => {
  return fetch(`http://localhost:3000/hogs/${id}`, {
    method: 'DELETE'
  })
    .then(r => r.json())
    .then(res => dispatch(removeHog(res.id)))
}
