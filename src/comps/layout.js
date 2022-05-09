import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLay from './headerLay';

function Layout(props){
  return(
    <React.Fragment>
      <HeaderLay />
      <Outlet />
    </React.Fragment> 
  )
}

export default Layout