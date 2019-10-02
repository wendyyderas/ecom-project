import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//testing to make sure that app doesnt crash
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
