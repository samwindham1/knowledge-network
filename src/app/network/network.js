import React from 'react';
import API from '@api/api.js';

class Network extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    API.getData().then(data => { this.setState({ loading: false, data }) });
  }

  renderSchema(data) {
    return (
      <div className="schema">
        <h2>Schema:</h2>
        <h3>Domain:</h3>
        <div className="json schema-domain">
          {JSON.stringify(data.schema.domain, null, 4)}
        </div>
        <h3>Network:</h3>
        <div className="json schema-network">
          {JSON.stringify(data.schema.network, null, 4)}
        </div>
      </div>
    );
  }

  renderData(data) {
    return (
      <div className="data">
        <h2>Data:</h2>
        <h3>Domain:</h3>
        <div className="json data-domain">
          {JSON.stringify(data.domain, null, 4)}
        </div>
        <h3>Network:</h3>
        <div className="json data-network">
          {JSON.stringify(data.network, null, 4)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Network</h1>
        {this.state.loading && <div>loading...</div>}
        {this.state.data && this.renderSchema(this.state.data)}
        {this.state.data && this.renderData(this.state.data)}
      </div>
    );
  }
}

export default Network;
