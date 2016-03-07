import axios from 'axios';
import React from 'react';

import Text from './Text.jsx';
import Tone from './Tone.jsx';

export class Layout extends React.Component {

  constructor() {
    super();

    this.state = {
      tone: false,
      text: false,
    }
  }

  componentDidMount() {
    axios.get('/data')
      .then((data) => {
        this.setState(data.data);
      })
      .catch((err) => {
        
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Text value={this.state.text} />
        </div>
        <div className="row">
          <Tone value={this.state.tone}/>
        </div>        
      </div>
    );
  }
}

export default Layout;