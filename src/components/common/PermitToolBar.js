import { Avatar, Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Frank from '../../frank.png'
import BB_bg from '../../BB_bg.png'
import { useNavigate } from "react-router-dom";


export default function PermitToolBar() {

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

return(
    <Toolbar 
    sx={{backgroundImage: `url(${BB_bg})`, backgroundSize: '100%', 
        backgroundRepeat: 'no-repeat',
        display: 'flex', flexDirection: 'column'}}
    >
    
    <Grid container spacing={2} sx={{color: 'white', display: 'flex', flexDirection: 'row', pt: '1rem'}}>
    <Grid item xs={8} sx={{display: 'flex', flexDirection: 'column'}}>
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

            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-end', p: 0}}>
                 {/* Notifications */}
                <Box sx={{mx: '1rem', my: '1rem', bgcolor: '#ffdd00'}}>
                    <Button onClick={() => navigate('/projectpermits')}>
                    <NotificationsIcon style={{ fill: 'black'}}></NotificationsIcon>
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
    </ Toolbar>
)
}