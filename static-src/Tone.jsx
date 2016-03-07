import React from 'react';

import BarChart from './BarChart.jsx';

export class Tone extends React.Component {

  render() {

    let emotion = this.props.value.document_tone;

    return (
      <div className="col-md-6">
        <BarChart value={emotion}/>
      </div>
    );
  }
}

export default Tone;
