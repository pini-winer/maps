import React , {useState,useEffect} from 'react';
import CanvasJSReact from "../graph_lib/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GraphApi(props){
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = "https://coronavirus-19-api.herokuapp.com/countries";
    let resp = await fetch(url);
    let data = await resp.json();
    let counteries_ar = ["USA","Israel","France","Italy","Brazil","India","Spain"];
    let temp_ar = data.filter(item => {
      return counteries_ar.includes(item.country)
    })
    let graph_ar = temp_ar.map(item => {
      return {
        label:item.country,
        y:item.testsPerOneMillion
      }
    })
    console.log(graph_ar)
    setAr(graph_ar);
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", 
    title: {
      text: "Test of covid"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", 
      indexLabelFontColor: "#FF0000",
      indexLabelPlacement: "outside",
      dataPoints: ar
    }]
  }




  return(
    <div className='container'>
      <h2>Graphs of Tests of covid permllion</h2>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default GraphApi





