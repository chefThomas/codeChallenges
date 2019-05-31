import React from 'react';
import Plot from 'react-plotly.js';

export default class BarGraph extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            type: 'bar', 
            x: ['Heads', 'Tails'], 
            y: [ this.props.headsCount, this.props.tailsCount ],
            text: [ this.props.headsCount, this.props.tailsCount ].map(String),
            textposition: 'auto'
          }
        ]}
        layout={ {width: 350, height: 300, title: "Side Count"} }
      />
    );
  }
}