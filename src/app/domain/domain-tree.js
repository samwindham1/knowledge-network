import React from 'react';
import API from '@api/api';

import Domain from './domain';
import './style/domain-tree.css';

class DomainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: this.props.domain,
      open: false
    }

  }

  handleClick() {
    this.setState({ open: !this.state.open });
    console.log(this.state.domain.name, !this.state.open);
  }

  renderChildren() {
    return this.state.domain.children.map(child => <DomainContainer key={child.id} domain={child} />);
  }

  render() {
    return (
      <div className="domain-container">
        <Domain
          domain={this.state.domain}
          open={this.state.open}
          handleClick={this.handleClick.bind(this)} />
        {this.state.open && this.state.domain.children && this.renderChildren()}
      </div>
    );
  }
}

class DomainTree extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    API.getSchema().then(schema => this.setState({ schema }));
    API.getDomain().then(domain => this.setState({ domain }));
  }

  render() {
    return (
      <div className="domain-tree">
        <h1>Domain Tree</h1>
        {this.state.domain && <DomainContainer domain={this.state.domain} />}
      </div>
    );
  }
}

export default DomainTree;
