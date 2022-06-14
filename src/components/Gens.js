import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from '../data/test.json';
import './Gens.css';

function Gens() {
  const d3Chart = useRef();
  useEffect(() => {
    const margin = { top: 50, right: 30, bottom: 30, left: 30 };
    const width = parseInt(d3.select('#d3demo').style('width'));
    const height = parseInt(d3.select('#d3demo').style('height'));

    const svg = d3
      .select(d3Chart.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'yellow')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  });

  return (
    <div>
      <svg ref={d3Chart}></svg>
      <h1>Hi</h1>
    </div>
  );
}

export default Gens;
