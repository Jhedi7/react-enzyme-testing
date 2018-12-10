import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import '../../setupTest';

let wrapped;

beforeEach( () => {
    wrapped = shallow(<App />);
})

it ('shows the comment box', () => {
    expect(wrapped.find(CommentBox).length)
        .toEqual(1);
});

it ('shows the comment list', () => {
    expect(wrapped.find(CommentList).length)
        .toEqual(1)
})

