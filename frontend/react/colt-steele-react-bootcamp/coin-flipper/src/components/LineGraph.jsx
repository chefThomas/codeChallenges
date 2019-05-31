import React from 'react';
import Plot from 'react-plotly.js';

export default class LineGraph extends React.Component {
    render() {
      console.log(this.props.flipNumber, this.props.countDiff)
    return (
      <Plot
        data={[
          {
            x: this.props.flipNumber,
            y: this.props.countDiff,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 400, height: 300, title:"Heads - Tails"} }
      />
    );
  }
}