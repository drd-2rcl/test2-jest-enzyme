import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox'

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox)).toHaveLength(1);

});