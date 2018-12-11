import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
// import { checkPropTypes } from 'prop-types';


export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
        {props.children}
    </Provider>
  )
}