import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
})

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find('[data-test="fetch-comments"]').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    
    const result = wrapped.find('li').length;
    expect(result).toEqual(2);

    done();
    wrapped.unmount();
  });
});
