import React from 'react';

export class BarChart extends React.Component {

  componentDidMount() {

  }

  render() {
    console.log(this.props.value);
    return (
      <div className="jumbotron">
        <h1>Emotion</h1>
      </div>
    );
  }
}

export default BarChart;
