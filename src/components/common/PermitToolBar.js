import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Frank from '../../frank.png'
import BB_bg from '../../BB_bg.png'
import Bbackground from '../../Bbackground.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PermitToolBar({open, setOpen, handleDrawerOpen}) {

const navigate = useNavigate()

const workers = [{
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


const drawerWidth = 240;

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
  
return(
    
    <AppBar position="sticky" open={open}>
    <Toolbar 
    sx={{backgroundImage: `url(${Bbackground})`, backgroundSize: '100%', border: 0,
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
    
    <Grid container spacing={2} sx={{color: 'white', display: 'flex', flexDirection: 'row', pt: '0.5rem'}}>
    <Grid item xs={8} sx={{display: 'flex', flexDirection: 'column'}}>
    <Typography variant="h5"
        sx={{color: '#ffffff', fontWeight: 500,
        width: '6rem', p: 0, 
        }}>Permits</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Typography sx={{color: '#ffffff', mr: 2}}>NHS Southampton University Central Hospital</Typography>
            <Box
                sx={{
                    width: '10rem',
                    height: '1.8rem',
                    m: 2,
                    bgcolor: '#ed6c02',
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    >
                <WarningIcon style={{ fill: 'white', m: '0.5rem' }}></WarningIcon>
                <Typography
                    sx={{
                    color: 'white',
                    fontSize: 14,
                    alignSelf: 'center',
                    m: '0.5rem',
                    }}
                >
                    Emerging risks
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '10rem',
                    height: '1.8rem', 
                    m: 2,
                    bgcolor: '#3f9710',
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    >
                <HealthAndSafetyIcon style={{ fill: 'white', m: '0.5rem' }}></HealthAndSafetyIcon>
                <Typography
                    sx={{
                    color: 'white',
                    fontSize: 14,
                    alignSelf: 'center',
                    m: '0.5rem',
                    }}
                >
                    Compliance
                </Typography>
            </Box>
        </Box>

        </Grid>

            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-end', p: 0}}>
                 {/* Notifications */}
                <Box sx={{mx: '1rem', my: '1rem'}}>
                    <Button onClick={() => navigate('/projectpermits')}>
                    <NotificationsIcon style={{ fill: '#ffffff'}}></NotificationsIcon>
                    </Button>
                </Box>
               {/* Current user info */}
               <Box sx={{flexDirection: 'column', p: '0.5rem'}}>
                    {/* user image */}
                    <Typography>{workers[0].name}</Typography>
                    <Typography sx={{fontSize: 12}}>{workers[0].position}</Typography>
               </Box>
               <Box sx={{p: '0.5rem'}}>
               <Avatar src={Frank} width={50} height={50} alt="User_image"
                    />
               </Box>
               
            </Grid>
    </Grid>
    </Toolbar>
  </AppBar>

)
}