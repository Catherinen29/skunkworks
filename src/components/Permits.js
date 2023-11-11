import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, 
    Dialog, DialogContent, DialogTitle, FormControl, Grid, 
    InputAdornment, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField,
    Toolbar, Typography } from "@mui/material";
import BB_bg from "../BB_bg.png"
import Frank from '../frank.png'
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { ActivePermitTag, EmergingIssuesStatusTag,
        CompletedStatusTag, AuthorisedStatusTag } from './PermitStatusTags';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';


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
        expiresAt: 'Expires: Today at 17:00'
    }, {
        type: 'Hot Works',
        supplier: 'Dan Jones',
        createdBy: 'James Burden',
        status: 'Emerging issues',
        activatesAt: 'Activates: 19 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }, {
        type: 'Electrical',
        supplier: 'EEW Electrical Contractors',
        createdBy: 'James Burden',
        status: 'Active',
        activatesAt: '',
        expiresAt: 'Expires: Today at 15:00'
    }, {
        type: 'Electrical',
        supplier: 'Saqib Sabir',
        createdBy: 'James Burden',
        status: 'Completed',
        activatesAt: '',
        expiresAt: 'Expires: 2 days ago'
    }, {
        type: 'Working at Height',
        supplier: 'JT Scaffold',
        createdBy: 'James Burden',
        status: 'Authorised',
        activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }, {
        type: 'Hot Works',
        supplier: 'Helen Flannigan',
        createdBy: 'James Burden',
        status: 'Active',
        activatesAt: 'Activates: 22 Jan at 09:00',
        expiresAt: ''
    }, {
        type: 'Hot Works',
        supplier: 'Helen Flannigan',
        createdBy: 'James Burden',
        status: 'Authorised',
        activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }, {
        type: 'Working at Height',
        supplier: 'JT Scaffold',
        createdBy: 'James Burden',
        status: 'Active',
        activatesAt: '',
        expiresAt: 'Expires: Today at 17:00'
    }, {
        type: 'Hot Works',
        supplier: 'Miriam Bartonwell',
        createdBy: 'James Burden',
        status: 'Authorised',
        activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
        expiresAt: ''
    }]
const navigate = useNavigate()

const [filter, setFilter] = useState('')

const handleFilter = (e) => {
    setFilter(e.target.value)
    console.log('*** FILTER ***', e.target.value)
}


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

    <Paper sx={{py: 5, px: 10, bgcolor: '#f1f3f3'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
            <Typography sx={{fontSize: 20}}>Manage permits issued on this project</Typography>  
                           
            {/* Search permits */}
            <Box sx={{display: 'flex'}}>
            <FormControl variant='outlined' size='small'
                sx={{width: '25rem', my: 2}}>
                <OutlinedInput 
                    startAdornment={
                    <InputAdornment position='start'>
                        <SearchIcon></SearchIcon>
                    </InputAdornment>
                    }
                    label='Search permits'
                />
            </FormControl>
            
            {(filter === 'Date') && 
                <Box>
                <FormControl required 
                size='small'
                sx={{display: 'block',
                m: 2, justifyContent: 'center' }}>
                <TextField
                    select
                    label={
                        <Box 
                        sx={{display: 'flex', alignItems: 'center'}}>
                        <DateRangeIcon sx={{mr: '1rem'}} />Today</ Box>}
                    size='small'
                    sx={{width: '10rem'}}
                >
                        <MenuItem value='Date'>Date</MenuItem>
                </TextField>

                <Button onClick={() => setFilter('')}>
                    <CloseIcon sx={{fontSize: 30, color: 'rgba(0, 0, 0, 0.54)'}} />
                </Button>

            </FormControl>
                </Box>
                }
            
            <FormControl required 
                size='small'
                sx={{display: 'block',
                m: 2, justifyContent: 'center' }}>
                <TextField
                    select
                    value=''
                    onChange={handleFilter}
                    SelectProps={{ IconComponent: () => null }} 
                    label={
                        <Box 
                        sx={{display: 'flex', alignItems: 'center'}}>
                        <FilterListIcon sx={{mr: '1rem'}} />Add filters</ Box>}
                    size='small'
                    sx={{width: '10rem'}}
                >
                        <MenuItem value='Date'>Date</MenuItem>
                        <MenuItem value='Type'>Type</MenuItem>
                        <MenuItem value='Supplier'>Supplier</MenuItem>
                        <MenuItem value='Created by'>Created by</MenuItem> 
                </TextField>
            </FormControl>
            </Box>
        </Box>

        <Box>
        <Button variant="contained" 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', m: 1}}>MANAGE TEMPLATES</Button>
        <Button onClick={() => navigate('/newpermit')} variant="contained" disableRipple
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>NEW PERMIT</Button>
        </Box>
        </Box>


                        {/* Dialog */}


        {/* List of permits */}
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

            {(filter === 'Date') && permits.filter((permit) => permit.expiresAt.includes('Today')).map((permit) => (
                <Card sx={{width: '30rem', margin: '2rem', display: 'flex'}}
                    >
                    <CardContent>
                        <List sx={{pt: 0}}>
                            <ListItem>
                                <ListItemIcon style={{fill: '#04535f', minWidth: 38}}>
                                    {permit.type === 'Hot works' && <WhatshotIcon style={{fill: '#04535f'}} />}
                                    {permit.type === 'Working at Height' && <LandscapeIcon style={{fill: '#04535f'}} />}
                                    {permit.type === 'Electrical' && <ElectricBoltIcon style={{fill: '#04535f'}} />}
                                </ListItemIcon>
                                <Typography sx={{color: '#04535f', fontSize: 12}}>{permit.type}</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>{permit.supplier}</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Created by: {permit.createdBy}</Typography>
                            </ListItem>
                        </List>
                    
                        
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', p: '1rem', 
                            width: '100%', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
                        {permit.status === 'Active' && <ActivePermitTag />}
                        {permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
                        {permit.status === 'Completed' && <CompletedStatusTag />}
                        {permit.status === 'Authorised' && <AuthorisedStatusTag />}

                        <Box sx={{mx: '1rem'}}>
                            {permit.expiresAt.length > 0 && permit.expiresAt}
                            {permit.activatesAt.length > 0 && permit.activatesAt}
                        </Box>
                    </Box>
                    </CardContent>
                </Card>
            ))}


            {(filter !== 'Date') && permits.map((permit) => (
                <Card sx={{width: '30rem', margin: '2rem', display: 'flex'}}
                    >
                <CardActionArea onClick={() => navigate('')} 
                    disableRipple
                >
                   
                    <CardHeader sx={{ pb: '10px'}} />
                    
                    <CardContent>
                        <List sx={{pt: 0}}>
                            <ListItem>
                                <ListItemIcon style={{fill: '#04535f', minWidth: 38}}>
                                    {permit.type === 'Hot works' && <WhatshotIcon style={{fill: '#04535f'}} />}
                                    {permit.type === 'Working at Height' && <LandscapeIcon style={{fill: '#04535f'}} />}
                                    {permit.type === 'Electrical' && <ElectricBoltIcon style={{fill: '#04535f'}} />}
                                </ListItemIcon>
                                <Typography sx={{color: '#04535f', fontSize: 12}}>{permit.type}</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography>{permit.supplier}</Typography>
                            </ListItem>

                            <ListItem>
                                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Created by: {permit.createdBy}</Typography>
                            </ListItem>
                        </List>
                    
                        
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', p: '1rem', 
                            width: '100%', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
                        {permit.status === 'Active' && <ActivePermitTag />}
                        {permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
                        {permit.status === 'Completed' && <CompletedStatusTag />}
                        {permit.status === 'Authorised' && <AuthorisedStatusTag />}

                        <Box sx={{mx: '1rem'}}>
                            {permit.expiresAt.length > 0 && permit.expiresAt}
                            {permit.activatesAt.length > 0 && permit.activatesAt}
                        </Box>
                    </Box>
                    </CardContent>
                </CardActionArea>
                </Card>
            ))}
        </Box>

        <Box>

        </Box>
    </Paper>

</Box>
)
}