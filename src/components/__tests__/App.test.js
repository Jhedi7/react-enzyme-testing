import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


it ('shows the comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Im the comment box component')

    ReactDOM.unmountComponentAtNode(div);
});

