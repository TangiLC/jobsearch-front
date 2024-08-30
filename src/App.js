import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import JobList from './JobList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
