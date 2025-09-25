import React, { useReducer } from 'react'

const initialState = { votes: 0 };

function reducer(state, action) {
  console.log("state: " + state)
  console.dir(state)
  switch (action.type) {
    case 'upvote':
      return { votes: state.votes + 1 };
    case 'downvote':
      return { votes: state.votes - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Current Votes: {state.votes}
      <button onClick={() => dispatch({ type: 'upvote' })}>Upvote</button>
      <button onClick={() => dispatch({ type: 'downvote' })}>Downvote</button>
    </>
  );
}

export default UseReducer
