import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox)).toHaveLength(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList)).toHaveLength(1);
});