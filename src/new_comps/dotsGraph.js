import React,{ useState, useEffect } from 'react';
import CanvasJSReact from "../graph_lib/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function DotsGraph(props) {
  const [data_ar,setDataAr] = useState([])

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = "https://api.covid19api.com/dayone/country/israel/status/confirmed";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    // מחזיר את ה 40 ימים האחרונים
    let temp_ar = data.slice(data.length-40,data.length);
    console.log(temp_ar);
    let dotsGraph_ar = temp_ar.map(item => {
      return {
        x:new Date(item.Date),
        y:item.Cases
      }
    })
    setDataAr(dotsGraph_ar);
  }


  const options = {
    theme: "light2",
    title: {
      text: "Israel last 40 days of covid!"
    },
    axisY: {
      title: "Cases",
      prefix: "P",
      // דואג שלא יתחיל מ0
      includeZero: false
    },
    data: [{
      type: "line",
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "#,##0",
      dataPoints:data_ar
      // בגדול ככה נראה הדאטא פוינטס
      // dataPoints: [
      //   { x: new Date("2022-01-01"), y: 200 },
      //   { x: new Date("2022-01-02"), y: 230 },
      //   { x: new Date("2022-01-03"), y: 250 },
      //   { x: new Date("2022-01-04"), y: 270 },
      //   { x: new Date("2022-01-05"), y: 300 },

      // ]
    }]
  }


  return (
    <div className='container'>
      <h2>Dots charts:</h2>
      <CanvasJSChart options={options}

      />
    </div>
  )
}

export default DotsGraph