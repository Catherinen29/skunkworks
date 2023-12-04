import {
  AppBar, Avatar, Box, Button, Card, CardActionArea, Divider, Drawer,
  IconButton, Grid, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Toolbar, Typography
} from "@mui/material";
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PermitToolBar from "./PermitToolBar";
import mob_bg from '../../mob_bg.png'
import BB_bg from '../../BB_bg.png'
import Bbackground from '../../Bbackground.png'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import WarningIcon from '@mui/icons-material/Warning';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Frank from '../../frank.png'



export default function SideBar() {

  const navigate = useNavigate()

  const workers = [{
    name: 'Francis Golder',
    value: 'Francis Golder',
    position: 'Supervisor',
    verified: true,
  }, {
    name: 'Jan Goldstein',
    value: 'Jan Goldstein',
    position: 'Supervisor',
    verified: true,
  }, {
    name: 'Tilda Swinton',
    value: 'Tilda Swinton',
    position: 'Supervisor',
    verified: true,
  }, {
    name: 'Bill Nighy',
    value: 'Bill Nighy',
    position: 'Supervisor',
    verified: true,
  }]



  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const theme = useTheme();

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
      width: `calc(${theme.spacing(8)} + 1px)`,
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
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: 'relative',
    bottom: open ? drawerWidth : 0,
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))

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

  return (

    <Box sx={{ display: 'flex', position: 'fixed', width: "100%", zIndex: 2 }}>

      <CssBaseline />

      {/* <PermitToolBar /> */}

      <AppBar position="sticky" open={open}>
        <Toolbar
          sx={{
            backgroundImage: `url(${Bbackground})`, backgroundSize: 'cover', border: 0,
            backgroundRepeat: 'no-repeat'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"

            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Grid container spacing={2} 
                sx={{ color: 'white', display: 'flex', flexDirection: 'row', p: 0 }}>
            <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', mt: '1rem',pb: '1rem' }}>
              <Typography variant="h5"
                sx={{
                  color: '#ffffff', fontWeight: 500,
                  width: '6rem', p: 0}}>
                    Permits</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Typography 
                  sx={{ color: '#ffffff', mr: 2 }}>
                    NHS Southampton University Central Hospital</Typography>
                <Box
                  sx={{
                    width: '10rem',
                    height: '1.5rem',
                    m: 1,
                    bgcolor: '#ed6c02',
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <WarningIcon style={{ fill: 'white', fontSize: 16 }}></WarningIcon>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: 14,
                      alignSelf: 'center',
                      ml: '0.3rem',
                    }}
                  >
                    Emerging risks (4)
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: '10rem',
                    height: '1.5rem',
                    m: 1,
                    bgcolor: '#3f9710',
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <HealthAndSafetyIcon style={{ fill: 'white', fontSize: 16 }}></HealthAndSafetyIcon>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: 14,
                      alignSelf: 'center',
                      ml: '0.3rem',
                    }}
                  >
                    Compliance (84%)
                  </Typography>
                </Box>
              </Box>

            </Grid>

            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', mt: '1rem'}}>
              {/* Notifications */}
              <Box sx={{ mx: '1rem' }}>
                <Button disableRipple>
                  <NotificationsIcon style={{ fill: '#ffffff' }}></NotificationsIcon>
                </Button>
              </Box>
              {/* Current user info */}
              <Box sx={{ flexDirection: 'column', px: '0.5rem' }}>
                {/* user image */}
                <Typography>{workers[0].name}</Typography>
                <Typography sx={{ fontSize: 12 }}>{workers[0].position}</Typography>
              </Box>
              <Box sx={{ px: '0.5rem' }}>
                <Avatar src={Frank} width={50} height={50} alt="User_image"
                />
              </Box>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>


      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Card elevation={0}>
            <CardActionArea
              onClick={() => navigate('/')}>
              <Box sx={{
                my: '1.5rem',
                ml: '0.5rem',
                border: 3,
                borderColor: '#04535f',
                borderRadius: '10%',
                width: 60,
                height: 60,
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography sx={{
                  fontFamily: 'Anton', color: '#04535f', fontSize: 14,
                  pl: '10%',
                  lineHeight: 1
                }}>
                  Balfour</Typography>
                <Typography sx={{
                  fontFamily: 'Anton', color: '#04535f', fontSize: 14,
                  pl: '10%',
                  lineHeight: 1
                }}>
                  Beatty</Typography>
              </Box>

            </CardActionArea>
          </Card>

          <IconButton onClick={handleDrawerClose} sx={{ color: "#04535f" }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton onClick={() => navigate('/hwpermitoverview')}>
              <ListItemIcon>
                <HealthAndSafetyIcon sx={{ fontSize: 20, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText fontSize={12}>Compliance</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton onClick={() => navigate('/completedpermit')}>
              <ListItemIcon>
                <GroupRoundedIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>People</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton onClick={() => navigate('/hotworkstemplate')}>
              <ListItemIcon>
                <ApartmentIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>Portfolio</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton onClick={() => navigate('/permitoverviewcompleted')}>
              <ListItemIcon>
                <NewspaperRoundedIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>Cases</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionRoundedIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>Permits</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>
                <WidgetsRoundedIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>Golden Thread Timeline</Typography>
                </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding
            sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsRoundedIcon sx={{ fontSize: 25, color: '#04535f' }} />
              </ListItemIcon>
              <ListItemText>
                <Typography>Settings</Typography>
                </ListItemText>
            </ListItemButton>
          </ListItem>

        </List>

      </Drawer>

    </Box>
  )
}
