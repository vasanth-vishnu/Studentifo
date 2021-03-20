import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CodeIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Avatar from '@material-ui/core/Avatar';
import logus from './Body';
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon >
      <Avatar aria-label="recipe" style={{backgroundColor:'#008880'}}>
            T
          </Avatar>
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary={logus.email}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CodeIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Snippet Book" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon style={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Write Blogs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PostAddIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Create Resume" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>other</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InsertEmoticonIcon style={{color:'white'}} />
      </ListItemIcon>
      <ListItemText style={{color:'white'}} primary="Student-Info" />
    </ListItem>
  </div>
);