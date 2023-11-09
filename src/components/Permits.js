import {Link as RouterLink} from 'react-router-dom'
import { Box, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import BB_bg from "../BB_bg.png"
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Permits() {

// TODO: remove static data and replace with data from database
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

return(
<Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Toolbar 
    sx={{bgcolor: '#04535f', display: 'flex', flexDirection: 'column'}}
    >
    
    <Grid container spacing={2} sx={{color: 'white', display: 'flex', flexDirection: 'row', pt: '1rem'}}>
    <Grid item xs={9} sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{color: '#ffffff', fontSize: 20}}>Permits</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Typography sx={{color: '#ffffff', mt: 2, mr: 2}}>NHS Southampton University Central Hospital</Typography>
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

            <Grid item xs={3} sx={{display: 'flex', justifyContent: 'flex-end', p: 0}}>
                 {/* Notifications */}
                 <Box sx={{mx: '2rem'}}>
                    <NotificationsIcon style={{ fill: 'white'}}></NotificationsIcon>
                </Box>
               {/* Current user info */}
               <Box sx={{flexDirection: 'column', justifyContent: 'flex-end', p: '0.5rem'}}>
                    {/* user image */}
                    <Typography sx={{alignSelf: ''}}>{workers[0].name}</Typography>
                    <Typography>{workers[0].position}</Typography>
               </Box>
            </Grid>
    </Grid>

    </ Toolbar>

    <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Typography>Manage permits issued on this project</Typography> 

        <Button variant="contained" 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>MANAGE TEMPLATES</Button>
        <Button component={RouterLink} to="/newpermit" variant="contained" 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>NEW PERMIT</Button>
    </Box>
</Box>
)
}