import React from 'react';
import { mount } from 'enzyme'; 
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

it('has a text area and a button', () => {
  // console.log(wrapped.find('textarea').length);
  // console.log(wrapped.find('button'));
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});