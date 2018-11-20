export const update = (hobbit) => {
  return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(hobbit)
  })
  .then(r => r.json())
}
