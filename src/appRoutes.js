import React from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './comps/home';
import Layout from './comps/layout';
import DotsGraph from './new_comps/dotsGraph';
import Graph1 from './new_comps/graph1';
import GraphApi from './new_comps/graphApi';
import Map from './new_comps/map';

function AppRoutes(props){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Map />} />
          <Route path="/graph1" element={<Graph1 />} />
          <Route path="/graphApi" element={<GraphApi />} />
          <Route path="/dotsGraph" element={<DotsGraph />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes