import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, 
    Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, 
    InputAdornment, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField,
    Toolbar, Typography } from "@mui/material";
import BB_bg from "../BB_bg.png"
import Frank from '../frank.png'
import WarningIcon from '@mui/icons-material/Warning';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { ActivePermitTag, EmergingIssuesStatusTag,
        CompletedStatusTag, AuthorisedStatusTag } from './common/PermitStatusTags'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import PermitToolBar from './common/PermitToolBar';


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

const [permitType, setPermitType] = useState('')

const handlePermitType = (e) => {
    setPermitType(e.target.value)
}

const [open, setOpen] = useState(false)
const handleOnClickOpen = () => {
    setOpen(true)
}
const handleClose = () => {
    setOpen(false)
}
const handleStart = () => {

}

return(
<Box sx={{display: 'flex', flexDirection: 'column'}}>

    <PermitToolBar />

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
        <Button onClick={handleOnClickOpen} variant="contained" disableRipple
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>NEW PERMIT</Button>
        </Box>
        </Box>


            {/* Pop out. 
                User is taken to the permit template page of the 
                type they select. */}

        <Dialog keepMounted open={open} onClose={handleClose}
            sx={{display: 'flex', flexDirection: 'column', width: '35rem', margin: 'auto'}}>
        <DialogTitle variant='h5'>New Permit</DialogTitle>            
        <DialogContent>Create temporary permits for suppliers and people assigned to this 
            project.
        </DialogContent>
        <DialogActions sx={{mb: '0.5rem', display: 'flex', flexDirection: 'column'}}>
            <FormControl size='small' sx={{width: '90%'}}>
                <TextField 
                    select
                    value={permitType}
                    label='Select a permit template'
                    onChange={handlePermitType}
                    size='small'
                >
                    <MenuItem value='Hot Works'>Hot Works</MenuItem>
                    <MenuItem value='Electrical'>Electrical</MenuItem>
                    <MenuItem value='Working at Height'>Working at Height</MenuItem>
                </TextField>
            </FormControl>
            
            <Box sx={{display: 'flex', alignSelf: 'flex-end', mt: '1rem'}}>
                <Button variant="contained" onClick={handleClose}  disableElevation={true}
                    sx={{bgcolor:  'white', color: '#00a4a9', fontWeight: 'bold', mx: 1}}>CANCEL</Button>
                <Button variant="contained" onClick={() => navigate('/hotworkstemplate')}
                    sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>
                        START <ArrowForwardIosIcon fontSize='12px' sx={{ml: 1, mt: -0.5}} /></Button>
            </Box>

        </DialogActions>
    </Dialog>


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