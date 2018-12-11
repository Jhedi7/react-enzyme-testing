import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import '../setupTest';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    status: 200,
    response: [{ name: 'fetched 1'}, { name: 'fetched 2'} ]
  })
});

afterEach(() => {
  moxios.uninstall();
});


it ('can fetch a list of comments and display them', (done) => {
  // attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  //introduce delay for moxios to work
  

  // setTimeout(() => {
  //   wrapped.update()

  //   expect(wrapped.find('li').length).toEqual(2);

  //   done()

  //   wrapped.unmount();
  // }, 100)

  // better way to do it with moxios wait function

  moxios.wait(() => {
    wrapped.update()

    expect(wrapped.find('li').length).toEqual(2);

    done()

    wrapped.unmount();
  })
  
  
})