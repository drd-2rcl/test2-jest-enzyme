import React from 'react';
import { mount } from 'enzyme'; 
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  // find the textarea element
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  // simulate a change event
  wrapped.find('textarea').simulate('change', {
    // provide a fake event object
    target: { value: 'new comment' }
  });

  // force the component to update
  wrapped.update()

  // assert that the textareas value has changed
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});