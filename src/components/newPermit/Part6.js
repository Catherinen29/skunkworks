import { Box, Checkbox, FormControl, MenuItem, Paper, 
    TextField, Typography} from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part6({newPermit, setNewPermit}) {

const [respForFireSafety, setRespForFireSafety ] = useState('')
const [watchDuration, setWatchDuration] = useState('')
const [photoRequired, setPhotoRequired] = useState(false)

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

// Handle user input
const handleInput = (e) => {
    setNewPermit({...newPermit, [e.target.name]: e.target.value})
}

    return (
        <Paper component='section' sx={{ 
            width: '600px',
            bgcolor: '#ffffff',
            borderRadius: 1,
            p: '2rem', 
            margin: 2 }} >
        <Typography variant="h5" sx={{fontWeight: 500}}>Part 6 - Fire Watch</Typography> 
        
        
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Responsible person for Fire Safety</Typography>  
            <AlertIcon></AlertIcon>
        </Box>
        
        <Box sx={{display: 'flex'}}>
        <Box>
        <FormControl 
            sx={{display: 'block',
            mb: 1, mt: '1rem'}}>
        <TextField
            select
            name= 'respForFireWatch'
            value={newPermit.respForFireWatch}
            onChange={handleInput}
            label='Select verified person'
            size='small' 
            sx={{width: '23rem',
            '.MuiSelect-select': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }
            }}> 
            {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
            ))}

            </TextField>
        </FormControl>
        </Box>

        {newPermit.respForFireWatch !== '' &&
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
            ml: '1rem', mt: '0.5rem'
            }}>
            <AssignmentIndIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: 1}}>
            Supervisor Passport</Typography> 
        </Box>
        }
        </Box>


        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Set fire watch duration (min 60 mins)</Typography>  
            <AlertIcon></AlertIcon>
        </Box>
        
        <FormControl 
            sx={{display: 'block',
            width: '25rem', mb: 1, mt: '1rem'}}>
        <TextField
            select
            name= 'watchDuration'
            value={newPermit.watchDuration}
            onChange={handleInput}
            label='Select duration'
            size='small' 
            sx={{width: '15rem'}}> 
                <MenuItem value='60 mins'>60 mins</MenuItem>
                <MenuItem value='90 mins'>90 mins</MenuItem>
                <MenuItem value='120 mins'>120 mins</MenuItem> 
                <MenuItem value='150 mins'>150 mins</MenuItem> 
                <MenuItem value='180 mins'>180 mins</MenuItem> 
            </TextField>
        </FormControl>
        
        <Box sx={{display: 'flex', alignItems: 'center',  mt: 2}}>
        <Checkbox sx={{pl: 0, color:'#00a4a9'}} 
            onChange={(e) => {setPhotoRequired(e.target.checked)}} 
            /> 
        <Typography sx={{fontSize: 14}}>
            Require thermal photographs for Fire Watch sign off</Typography>
        </Box>

        </Paper>
    )
}