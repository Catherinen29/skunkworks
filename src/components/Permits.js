import {Link as RouterLink} from 'react-router-dom'
import { Box, Button, Card, FormControl, Grid, InputAdornment, OutlinedInput, Paper, TableBody, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import BB_bg from "../BB_bg.png"
import Frank from '../frank.png'
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


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

    const permits = [{
        type: 'Hot Works',
        supplier: 'Balfour Beatty',
        createdBy: 'James Burden',
        status: 'Active',
        activatesAt: '',
        expiresAt: 'Today at 17:00'
    }, {
        type: 'Hot Works',
        supplier: 'Dan Jones',
        createdBy: 'James Burden',
        status: 'Emerging issues',
        activatesAt: '19 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }, {
        type: 'Electrical',
        supplier: 'EEW Electrical Contractors',
        createdBy: 'James Burden',
        status: 'Active',
        activatesAt: '',
        expiresAt: 'Today at 15:00'
    }, {
        type: 'Electrical',
        supplier: 'Saqib Sabir',
        createdBy: 'James Burden',
        status: 'Completed',
        activatesAt: '',
        expiresAt: '2 days ago'
    }, {
        type: 'Working at Height',
        supplier: 'JT Scaffold',
        createdBy: 'James Burden',
        status: 'Authorised',
        activatesAt: '20 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }]

return(
<Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Toolbar 
    sx={{bgcolor: '#04535f', display: 'flex', flexDirection: 'column'}}
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
                <Box sx={{mx: '2rem', my: '1rem'}}>
                    <NotificationsIcon style={{ fill: 'white'}}></NotificationsIcon>
                </Box>
               {/* Current user info */}
               <Box sx={{flexDirection: 'column', p: '0.5rem', mx: '1rem'}}>
                    {/* user image */}
                    <Typography>{workers[0].name}</Typography>
                    <Typography sx={{fontSize: 12}}>{workers[0].position}</Typography>
               </Box>
               <img src={Frank} width={50} height={50} alt="User_image"></img>
            </Grid>
    </Grid>
    </ Toolbar>

    <Paper sx={{py: 5, px: 10}}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box>
            <Typography sx={{fontSize: 20}}>Manage permits issued on this project</Typography>                 
            {/* Search permits */}
            <FormControl variant='outlined' 
                sx={{width: '25rem', my: 2}}>
                {/* <InputLabel>Search permits</InputLabel>  */}
                <OutlinedInput 
                startAdornment={
                        <InputAdornment position='start'>
                            <SearchIcon></SearchIcon>
                        </InputAdornment>
                    }
                        label='Search permits'
                />
            </FormControl>
            
            {/* Filters */}
        </Box>

        <Box>
        <Button variant="contained" 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>MANAGE TEMPLATES</Button>
        <Button component={RouterLink} to="/newpermit" variant="contained" 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>NEW PERMIT</Button>
        </Box>
        </Box>

        {/* List of permits */}
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            {permits.map((permit) => (
                <Card sx={{width: '25rem', height: '10rem', margin: '2rem', display: 'flex'}}>
                    <TableBody sx={{width: '100%'}}>
                    <TableRow sx={{height: '5rem'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>

                            {/* works type image */}
                            <Box sx={{width: '40%', bgcolor: '#04535f'}}></Box>

                            <Box sx={{m: '1rem'}}>
                                <Typography sx={{color: '#04535f', fontSize: 12}}>{permit.type}</Typography>
                                <Typography>{permit.supplier}</Typography>
                                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Created by: {permit.createdBy}</Typography>
                            </Box>
                        </Box>
                    </TableRow>
                        
                    <TableRow>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', p: '1rem', 
                            width: '100%', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
                        <Box sx={{
                                width: '8rem', height: '1.8rem', borderRadius: 50, border: 1,
                                display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            >
                            <Typography sx={{ fontSize: 14, alignSelf: 'center', m: '0.5rem',
                                }}>
                                {permit.status}
                            </Typography>
                        </Box>
                        
                        <Box sx={{mx: '1rem'}}>
                            {permit.expiresAt.length > 0 && permit.expiresAt}
                            {permit.activatesAt.length > 0 && permit.activatesAt}
                        </Box>
                    </Box>
                    </TableRow>
                     
                    </TableBody>
                    
                </Card>
            ))}
        </Box>
    </Paper>

</Box>
)
}