import React from 'react';

import './style/domain.css';

class Domain extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.domain.id,
      name: this.props.domain.name,
      hasChildren: this.props.domain.children.length ? true : false
    };
  }

  renderOpenButton() {
    return (
      <div className="button-row">
        <button className="open-button" onClick={this.props.handleClick}>
          <span className="button-icon">
            {this.props.open ? '-' : '+'}
          </span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="domain">
        <h3 className="domain-title">
          <span className="domain-id">{this.state.id}.</span>
          <span className="domain-name">{this.state.name}</span>
        </h3>
        {this.state.hasChildren && this.renderOpenButton()}
      </div>
    );
  }
}

export default Domain;
