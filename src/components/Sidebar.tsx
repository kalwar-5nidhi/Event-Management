import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { text: 'Events', path: '/events', icon: <EventIcon /> },
  { text: 'Create Event', path: '/create', icon: <AddCircleIcon /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          paddingTop: '64px',
          backgroundColor: '#e0f7fa', // 🌤️ Light skyblue background
          color: '#01579b',
        },
      }}
    >
      <List>
        {menuItems.map(({ text, path, icon }) => (
          <ListItemButton
            component={Link}
            to={path}
            key={text}
            selected={location.pathname === path}
            sx={{
              borderRadius: 2,
              margin: '8px',
              color: '#01579b',
              '&.Mui-selected': {
                backgroundColor: '#b2ebf2', // soft blue when selected
                color: '#004d40',
                '& .MuiListItemIcon-root': {
                  color: '#004d40',
                },
              },
              '&:hover': {
                backgroundColor: '#b2ebf2', // hover light blue
              },
            }}
          >
            <ListItemIcon sx={{ color: '#01579b' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
