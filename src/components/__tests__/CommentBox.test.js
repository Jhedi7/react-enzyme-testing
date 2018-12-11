import React from 'react';
import App from 'components/App';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import '../../setupTest';
import Root from 'Root';

let wrapped;

beforeEach(() => {
   wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
   )
});

afterEach(() => {
  wrapped.unmount();
})

it ('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});



describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    wrapped.update();

  })
  it ('has a textarea for users to type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    } );

  it ('when form is submited textarea gets emptied', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    expect(wrapped.find('form').simulate('submit'));
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
});