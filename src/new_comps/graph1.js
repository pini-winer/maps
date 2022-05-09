import React from 'react';
import CanvasJSReact from "../graph_lib/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph1(props) {

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", 
    title: {
      text: "cars sale"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", 
      indexLabelFontColor: "#FF0000",
      indexLabelPlacement: "outside",
      dataPoints: [
        { label:"Mazda", y: 71 },
        { label:"Toyota", y: 55 },
        { label:"Tesla", y: 30 },
        { label:"Opel", y: 50 },
        { label:"Lada", y: 50 },
      ]
    }]
  }


  return (
    <div className='container'>
      <h2>Graphs </h2>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default Graph1