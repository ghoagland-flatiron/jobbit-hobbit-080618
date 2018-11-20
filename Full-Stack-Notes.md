I click on a Hobbit card

 1. `onClick` handler is triggered

 2. This calls selectHobbit from props which calls  dispatch with the return value of our action creator, which is an object with a payload and type of `'SELECT_HOBBIT'`

 3. Dispatches that action to (middleware and) the reducer

 4. Reducer returns some kind of new state, usually dependent on our current state and the payload

 5. New state triggers calling `mapStateToProps` for each connected component. If the component is subscribed to a piece of state that has changed, it rerenders


I submit an Edited Hobbit

1.`onSubmit` listener is called.
2. Call `editHobbit` which returns `dispatch(updateHobbit(hobbit))`

    a. `updateHobbit` returns a function. This function takes in `dispatch` as an argument.
    b. This function is passed into `dispatch` which calls the function with itself.

    c. The async function calls `fetch` with our hobbit as a body.


3. ~~~~~~ THE INTERNET ~~~~~~~~~~~

4. Our backend gets a request
5. Our routes tell our request which controller and action to use
6. ActiveRecord is called to update our database and returns our updated instance
7. Render some JSON and send it back!

8. ~~~~~~~ THE INTERNET ~~~~~~~~~~~~~

9. We parse the response
10. We DISPATCH a new action to our reducer.

11. See above for what happens next.
