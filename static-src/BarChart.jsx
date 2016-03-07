import { Bar } from 'react-chartjs';
import React from 'react';

export class BarChart extends React.Component {

  constructor() {
    super();

    this.parseToneScores = this.parseToneScores.bind(this);
    this.parseToneNames = this.parseToneNames.bind(this);
  }

  parseToneScores(emotion) {
    let tonesArray = emotion.tone_categories[0].tones;
    return tonesArray.map((v) => 
      v.score * 100
    );
  }

  parseToneNames(emotion) {
    let tonesArray = emotion.tone_categories[0].tones;
    return tonesArray.map((v) => 
      v.tone_name
    );
  }

  render() {
    let emotion = this.props.value || false;

    let catagoryName = emotion ? emotion.tone_categories[0].category_name : null;

    let toneScores = emotion ? this.parseToneScores(emotion) : null;
    let toneNames = emotion ? this.parseToneNames(emotion) : null;

    let data = {
      labels: toneNames,
      datasets: [{
        fillColor: "#8F6ADF",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: toneScores,
      }],
    }

    let chart = emotion ? <Bar data={data} width="400" height="400"/> : null;

    return (
      <div className="jumbotron">
        <h1>{catagoryName}</h1>
        {chart}
      </div>
    );
  }
}

export default BarChart;
