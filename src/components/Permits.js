import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { Alert, Box, Button, Card, CardActionArea, CardContent, Collapse, CssBaseline, Dialog, DialogActions, 
    DialogContent, DialogTitle, FormControl, IconButton, 
    InputAdornment, InputLabel, List, ListItem, ListItemIcon, MenuItem, OutlinedInput, Paper, Snackbar, TextField,
    Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import BB_bg from "../BB_bg.png"
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';

import PermitToolBar from './common/PermitToolBar';
import SideBar from './common/SideBar';
import { ActivePermitTag, EmergingIssuesStatusTag,
        CompletedStatusTag, AuthorisedStatusTag, PreAuthStatusTag } from './common/PermitStatusTags'


export default function Permits({permits, permitCreated, setPermitCreated, workers}) {

const navigate = useNavigate()

const [filter, setFilter] = useState('')
const handleFilter = (e) => {
    setFilter(e.target.value)
    console.log('*** FILTER ***', e.target.value)
}

// Start new permit
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

// Manage searchbar label
const [shrink, setShrink] = useState(false)


// Manage snackbars confirming successful creation of permit
const handleClosePermitSuccess = (event, reason) => {
    if (reason === 'clickaway') {
        return
    }
    setPermitCreated(false)
}

const handleCloseImmutableMsg = (event, reason) => {
    if (reason === 'clickaway') {
        return
    }
    setPermitCreated(false)
}

const navigateAway = () => {
    handleCloseImmutableMsg()
    handleClosePermitSuccess()
    navigate('/hwpermitoverview')
}

return(
<Box overflow='auto' 
// sx={{display: 'flex', flexDirection: 'column'}}
>
    
    <SideBar />

    <Box sx={{py: 5, pl: 15, pr: 10, bgcolor: '#f1f3f3', 
        display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant='h6' sx={{fontWeight: 500, mb: '1rem'}}>Manage 37 permits issued on this project</Typography>  
            
            <Box sx={{display: 'flex', flexDirection: 'row', height: '3rem'}}>
                <Button variant="contained" 
                    sx={{bgcolor:  '#00a4a9', m: 1, fontSize: 12, 
                    width: '11rem', height: '2rem', 
                    "&:hover": {
                        bgcolor: "#008488"}}}>
                    <Typography sx={{pt: '0.2rem', fontWeight: 500, fontSize: 14}}>
                    MANAGE TEMPLATES</Typography>
                </Button>
                <Button onClick={handleOnClickOpen} variant="contained" disableRipple
                    sx={{bgcolor:  '#00a4a9', m: 1, 
                    width: '9rem', height: '2rem',
                    "&:hover": {
                        bgcolor: "#008488"}}}>
                    <Typography sx={{pt: '0.2rem', pr: '0.5rem', fontWeight: 500, fontSize: 14}}>
                    NEW PERMIT</Typography>
                    <AddRoundedIcon style={{fontSize: 16}} />
                    </Button>
            </Box>    
            </Box>
            

            {/* Search permits */}
            <Box sx={{display: 'flex'}}>
            <FormControl variant='outlined' size='small'
                sx={{width: '30rem', my: 2}}>
                <TextField size='small'
                onFocus={() => setShrink(true)}
                InputLabelProps={{ style: { ml: '10rem', shrink } }}
                InputProps= {{
                    startAdornment: 
                    <InputAdornment position='start'>
                            <SearchIcon />
                    </InputAdornment>
                    }}
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
                    sx={{bgcolor:  'white', color: '#00a4a9', fontWeight: 500, mx: 1,
                    "&:hover": {
                        bgcolor: '#ffffff', 
                        color: "#008488"}}}>
                        CANCEL</Button>
                <Button variant="contained" 
                    onClick={() => 
                        permitType === 'Hot Works' && navigate('/hotworkstemplate')}
                    sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1,
                    "&:hover": {
                        bgcolor: "#008488"}}}>
                    <Typography sx={{pt: '0.2rem', pr: '0.5rem', fontWeight: 500, fontSize: 14}}>
                    START</Typography>
                    <ArrowForwardIosIcon fontSize='12px' sx={{mt: '0.1rem'}} /></Button>
            </Box>

        </DialogActions>
    </Dialog>


        {/* List of permits */}
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '2rem', 
            justifyContent: 'center', mt: '1rem'}}>

            {(filter === 'Date') && permits.filter((permit) => permit.expiresAt.includes('Today')).map((permit) => (
                <Card sx={{width: '25rem', display: 'flex'}}>
                    <CardContent sx={{p: 0, width: '100%'}}>
                    <CardActionArea onClick={navigateAway}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{width: '8rem', height: '8rem', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                            bgcolor: '#04535f', color: '#ffffff'}}>
                            {permit.supplierType === 'company' 
                                ? <ApartmentIcon sx={{width: '2rem', height: '2rem'}} /> 
                                : <PersonIcon sx={{width: '2rem', height: '2rem'}} /> }
                        </Box>
                        
                        <List sx={{pt: 1}}>
                            <ListItem>
                                <ListItemIcon style={{fill: '#04535f', minWidth: 38}}>
                                    {permit.type === 'Hot Works' && <WhatshotIcon style={{fill: '#04535f'}} />}
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
                    </Box>
                    
                    <Divider />                        
                    
                    <Box sx={{display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, 
                            alignItems: 'center', flexDirection: 'row', pt: '1rem', pb: 0,
                            borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
                        {permit.status === 'Active' && <ActivePermitTag />}
                        {permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
                        {permit.status === 'Completed' && <CompletedStatusTag />}
                        {permit.status === 'Authorised' && <AuthorisedStatusTag />}
                        {permit.status === 'Pre-authorisation' && <PreAuthStatusTag />}

                        <Box sx={{mx: '1rem', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, 
                            display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            {permit.expiresAt.length > 0 && permit.expiresAt}
                            {permit.activatesAt.length > 0 && permit.activatesAt}
                        </Box>
                    </Box>
                    </CardActionArea>
                    </CardContent>
                </Card>
            ))}


            {(filter !== 'Date') && permits.map((permit) => (
                <Card sx={{width: '25rem', display: 'flex'}}>
                    <CardContent sx={{p: 0, width: '100%'}}>
                    <CardActionArea onClick={navigateAway}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box sx={{width: '8rem', height: '8rem', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                                bgcolor: '#04535f', color: '#ffffff'}}>
                                {permit.supplierType === 'company' 
                                    ? <ApartmentIcon sx={{width: '2rem', height: '2rem'}} /> 
                                    : <PersonIcon sx={{width: '2rem', height: '2rem'}} /> }
                            </Box>
                            
                            <List sx={{pt: 1}}>
                                <ListItem>
                                    <ListItemIcon style={{fill: '#04535f', minWidth: 38}}>
                                        {permit.type === 'Hot Works' && <WhatshotIcon style={{fill: '#04535f'}} />}
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
                        </Box> 

                        <Divider />

                        <Box sx={{display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, 
                                alignItems: 'center', flexDirection: 'row',  pl: '1rem', pt: '1rem', pb: 0,
                                }}>
                            {permit.status === 'Active' && <ActivePermitTag />}
                            {permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
                            {permit.status === 'Completed' && <CompletedStatusTag />}
                            {permit.status === 'Authorised' && <AuthorisedStatusTag />}
                            {permit.status === 'Pre-authorisation' && <PreAuthStatusTag />}

                            <Box sx={{mx: '1rem'}}>
                                {permit.expiresAt.length > 0 && permit.expiresAt}
                                {permit.activatesAt.length > 0 && permit.activatesAt}
                            </Box>
                        </Box>        

                    </CardActionArea>
                    </CardContent>
                </Card>
            ))}
        </Box>

        <Box>

        </Box>    
        

        <Box>
            <Snackbar open={permitCreated} autoHideDuration={6000} elevation={3}
                    onClose={handleClosePermitSuccess}>
                <Alert onClose={handleClosePermitSuccess} severity='success'  
                    sx={{width: '30rem', mb: '4rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                    Hot Works Permit #HW087327 is created and in pre-authorisation.
                </Alert>
            </Snackbar>    
        </Box>

        <Box>
            <Snackbar open={permitCreated} autoHideDuration={6000} 
                    onClose={handleCloseImmutableMsg}>
                <Alert onClose={handleCloseImmutableMsg} severity='info'
                    sx={{width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                Immutable record created.
                </Alert>
            </Snackbar>    
        </Box>


    </Box>


</Box>
)
}