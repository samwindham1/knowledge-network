import React from 'react';
// import Network from './network/network';
import DomainTree from './domain/domain-tree';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <DomainTree />
      </div>
    )
  }
}

export default App;
