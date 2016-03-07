import Axios from 'axios';
import React from 'react';

export class Text extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Text;
