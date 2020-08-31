import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from 'react-router-dom';

export const MenuContainer = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goOut = () => {
    history.push("/login")
  };
  const approvedBand = () => {
    history.push("/approved")
  };

  return (
    <div>
        <IconButton
            edge="start"
            className={props.className}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={approvedBand}>Solicitações</MenuItem>
        <MenuItem onClick={handleClose}>Cadastrar Admin</MenuItem>
        <MenuItem onClick={goOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
