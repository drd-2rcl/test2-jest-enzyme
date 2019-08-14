import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // find the fetchCommnets button and click it

  // expect to find a list of comments
});
