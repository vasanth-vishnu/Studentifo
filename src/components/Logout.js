import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
<<<<<<< HEAD
import {useHistory} from 'react-router-dom';
=======
>>>>>>> af69d900c0b8028531c06fd5604141e61167cd44
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
<<<<<<< HEAD
  const history = useHistory();
  const handleClose = () => {
  
    history.push("/");
=======

  const handleClose = () => {
    setAnchorEl(null);
>>>>>>> af69d900c0b8028531c06fd5604141e61167cd44
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Badge badgeContent=" " color="" overlap="circle" variant="dot" style={{color:'white'}}>
              <ExitToAppIcon />
            </Badge>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
<<<<<<< HEAD
      
=======
        onClose={handleClose}
>>>>>>> af69d900c0b8028531c06fd5604141e61167cd44
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
