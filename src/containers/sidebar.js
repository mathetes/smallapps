import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};
const wrapper = {
  float: 'left'
}
const menulink = {
  textDecoration: 'none',
  color: 'black'
}

class Sidebar extends Component {
  render() {
    return (
        <aside style={wrapper}>
          <Paper style={style}>
            <Menu>
              <MenuItem>
                <Link to="/">Главная</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/counter">Счетчик</Link>
              </MenuItem>
            </Menu>
          </Paper>
        </aside>
    );
  }
}

export default Sidebar;
