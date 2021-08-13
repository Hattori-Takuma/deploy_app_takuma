import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h3>ハットリ</h3>
        <Link to="/">Page1</Link>
        <Link to="Page2">Page2</Link>




      </Toolbar>
    </AppBar>
  );
}
export default Header