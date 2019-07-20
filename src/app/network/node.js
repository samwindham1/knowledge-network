import React from 'react';

class Node extends React.Component {
  constructor() {
    super();

    this.state = {
      id: this.props.id,
      name: this.props.name,
      edges: this.props.edges
    };
  }

  render() {
    return (
      <div class="node">

      </div>
    );
  }
}

export default Node;
