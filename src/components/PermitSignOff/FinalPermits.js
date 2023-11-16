import { useNavigate } from 'react-router-dom'
import { Alert, Box, Button, Card, CardActionArea, CardContent, Collapse, Dialog, DialogActions, 
    DialogContent, DialogTitle, FormControl, IconButton, 
    InputAdornment, List, ListItem, ListItemIcon, MenuItem, Paper, Snackbar, TextField,
    Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
// import BB_bg from "../BB_bg.png"
import SearchIcon from '@mui/icons-material/Search';
import { ActivePermitTag, EmergingIssuesStatusTag,
        CompletedStatusTag, AuthorisedStatusTag, ReadyPermitTag } from '../common/PermitStatusTags'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useState } from 'react';
import PermitToolBar from '../common/PermitToolBar';


export default function FinalPermits({permits}) {

const navigate = useNavigate()

const [filter, setFilter] = useState('Date')
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

const [showPermitCreatedMsg, setShowPermitCreatedMsg] = useState(true)
const [showImmutableMsg, setShowImmutableMsg] = useState(true)



return(
<Box sx={{display: 'flex', flexDirection: 'column'}}>

    <PermitToolBar />

    <Paper sx={{py: 5, px: 8, bgcolor: '#f1f3f3'}}>
        <Box>
            <Box>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography variant='h6' sx={{fontWeight: 500, mb: '1rem'}}>Manage 37 permits issued on this project</Typography>  
                
                <Box sx={{display: 'flex', flexDirection: 'row', height: '3rem'}}>
                    <Button variant="contained" 
                        sx={{bgcolor:  '#00a4a9', m: 1, fontSize: 12, width: '10rem', height: '2rem'}}>
                            MANAGE TEMPLATES</Button>
                    <Button onClick={handleOnClickOpen} variant="contained" disableRipple
                        sx={{bgcolor:  '#00a4a9', m: 1, fontSize: 12, width: '8rem', height: '2rem'}}>
                            NEW PERMIT +</Button>

                </Box>    
                </Box>
                

                {/* Search permits */}
                <Box sx={{display: 'flex'}}>
                <FormControl variant='outlined' size='small'
                    sx={{width: '30rem', my: 2}}>
                    <TextField size='small'
                    InputLabelProps={{ shrink: false, style: { marginLeft: 30 } }}
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
                <Button variant="contained" onClick={() => 
                    permitType === 'Hot Works' && navigate('/hotworkstemplate')}
                    sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>
                        START <ArrowForwardIosIcon fontSize='12px' sx={{ml: 1, mt: -0.5}} /></Button>
            </Box>

        </DialogActions>
    </Dialog>


        {/* List of permits */}
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', mt: '1rem'}}>
        <Card sx={{width: '23rem', display: 'flex'}}>
                    <CardContent sx={{p: 0, width: '100%'}}>
                    <CardActionArea onClick={() => navigate('/permitoverviewcompleted')}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box sx={{width: '8rem', height: '8rem', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                                bgcolor: '#04535f', color: 'white'}}>
                                <PersonIcon sx={{width: '2rem', height: '2rem'}} />
                            </Box>
                            
                            <List sx={{pt: 1}}>
                                <ListItem>
                                    <ListItemIcon style={{fill: '#04535f', minWidth: 38}}>
                                        <WhatshotIcon style={{fill: '#04535f'}} />
                                    </ListItemIcon>
                                    <Typography sx={{color: '#04535f', fontSize: 12}}>Hot Works</Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography>James Worthington</Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Created by: Francis Golder</Typography>
                                </ListItem>
                            </List>                            
                        </Box> 

                        <Divider />

                        <Box sx={{display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, 
                                alignItems: 'center', flexDirection: 'row',  pl: '1rem', pt: '1rem', pb: 0,
                                }}>
                            <ReadyPermitTag />

                            <Box sx={{mx: '1rem'}}>
                                Expires: Today at 17:00
                            </Box>
                        </Box>        

                    </CardActionArea>
                    </CardContent>
                </Card>
                
        {(filter === 'Date') && permits.filter((permit) => permit.expiresAt.includes('Today')).map((permit) => (
                <Card sx={{width: '23rem', display: 'flex'}}>
                    <CardContent sx={{p: 0, width: '100%'}}>
                    <CardActionArea onClick={() => navigate('/hwpermitoverview')}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box sx={{width: '8rem', height: '8rem', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                                bgcolor: '#04535f', color: 'white'}}>
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
        

    </Paper>


</Box>
)
}