import React from 'react';
import API from '@api/api';

import Node from './node';

class Network extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    API.getSchema().then(schema => this.setState({ schema }));
    API.getNetwork().then(network => this.setState({ network }));
  }

  renderNetwork(network) {
    return (
      <div className="network">
        <div className="json data-network">
          {JSON.stringify(network, null, 4)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="network-graph">
        <h1>Network</h1>
        {this.state.network && this.renderNetwork(this.state.network)}
      </div>
    );
  }
}

export default Network;
