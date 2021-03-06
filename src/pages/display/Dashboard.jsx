import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import SearchIcon from '@mui/icons-material/Search';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import Popover from '@mui/material/Popover';
import { useNavigate } from "react-router-dom";


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import './dashboard.scss'
import Notes from '../notes/Notes';
import Archive from '../archive/Archive';
import IsDeleted from '../isDeleted/IsDeleted';
import NotesService from '../../services/NotesService';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  boxShadow: "0px",
  border: "1px solid lightgray",
  color: "black",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [useremail, setuseremail] = React.useState("")
  const [barcolor, setBarcolor] = React.useState("#ffffff")


  // React.useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate('/signin')
  //   }

  // }, [])
  
  const getuseremail = (mailid) => {
    setuseremail(mailid)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const opens = Boolean(anchorEl);
  const id1 = opens ? 'simple-popover' : undefined;


  let list = [
    {
      text: "Notes"
      ,
      icons: <LightbulbOutlinedIcon />,
    },
    {
      text: "Reminders",
      icons: <NotificationsOutlinedIcon />,
    },
    {
      text: "Edit labels",
      icons: <CreateOutlinedIcon />,
    },
    {
      text: "Archive",
      icons: <ArchiveOutlinedIcon />,
    },
    {
      text: "Bin",
      icons: <DeleteForeverOutlinedIcon />
    }
  ]

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signout = () => {
    localStorage.clear();
    navigate('/signin')
  }

  const changeroutes = (text) => {

    switch (text) {
      case 'Archive':
        setBarcolor("")
        setBarcolor("#feefc3")
        navigate('/archive')
        break;
      case 'Notes':
        setBarcolor("")
        setBarcolor("red")
        navigate('/')
        
        break;
      case 'Bin':
        navigate('/deleted')
        break;
      default:
        navigate('/')
        break;
    }

  }


  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <div className='header-bar'>
          <AppBar position="fixed" open={open}>
          <div className='bar-app'>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >

                <MenuIcon />

              </IconButton>
              <img className="keep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keep logo" />
              <Typography variant="h6" noWrap component="div">
                Fundoo Notes
              </Typography>
              <div className='search'>
                <IconButton> <SearchIcon /> </IconButton>
                <input className='search-input' type="text" placeholder='Search' ></input>

              </div>
              <div className='hearder'>
                <ul className="header-icons">
                  <IconButton> <RefreshOutlinedIcon /> </IconButton>
                  <IconButton> <ViewAgendaOutlinedIcon /> </IconButton>
                  <IconButton> <SettingsOutlinedIcon /> </IconButton>
                  <IconButton> <AppsOutlinedIcon /></IconButton>
                  <IconButton> <AccountCircleOutlinedIcon onClick={handleOpen} variant="contained" aria-describedby={id1} />
                    <Popover
                      id={id1}
                      open={opens}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Typography sx={{ p: 2 }} component="span">
                        <div className='account-details'>
                          <div className='detail'>
                            <div className='image-details'>{(localStorage.getItem("firstname")).charAt(0).toUpperCase()} </div>
                            <div className='Name'> { localStorage.getItem("firstname") +" "+ localStorage.getItem("lastname")}</div>
                            <div className='email'>{localStorage.getItem("email")}</div>
                            <div className='manage-account' onClick={signout}>Sign out</div>
                          </div>
                        
                        </div>

                      </Typography>
                    </Popover>

                  </IconButton>
                </ul>
              </div>
            </Toolbar>
            </div>
          </AppBar>

        </div>

        <div className='side-bar'>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>

            </DrawerHeader>
            <Divider />
            <div className='side-navbar'>
              <List >
                <div className='bgcolor'   >
                  {list.map((text, index) => (
                    <ListItem  button key={text.text} onClick={() => changeroutes(text.text)}>
                      <ListItemIcon >
                        {text.icons}
                      </ListItemIcon>
                      <ListItemText primary={text.text} />
                    </ListItem>
                  ))}
                </div>
              </List>
            </div>

            <Divider />
          </Drawer>
        </div>


        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <DrawerHeader />
          <Typography className='content-note' component="span" >

            <Routes>
              <Route exact path='/' element={<Notes />} />
              <Route exact path='/archive' element={<Archive />} />
              <Route exact path='/deleted' element={<IsDeleted />} />

            </Routes>

          </Typography>
        </Box>

      </Box>

    </div>


  );
}
