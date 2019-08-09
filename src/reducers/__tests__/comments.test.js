import commentsReducer from 'reducers/comments';
import { SAVE_COMMENTS } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: 'New Comment'
  };
  const newState = commentsReducer(['New Comment'], action);
  expect(newState).toEqual(['New Comment']);
});

it('handle action with unknown type', () => {
  const newState = commentsReducer([], {type: 'ASDASDASD'})
  expect(newState).toEqual([]);
})
