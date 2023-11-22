import { Box, FormControl, InputLabel, MenuItem, Paper, 
    TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/en-gb';
import AlertIcon from "../common/AlertIcon"

export default function Part3({newPermit, setNewPermit}) {

const [worksDate, setWorksDate] = useState(dayjs('2023-01-01T00:00'))
const [startTime, setStartTime] = useState(dayjs('2022-04-17T00:00'))
const [endTime, setEndTime] = useState(dayjs('2022-04-17T00:00'))
const [area, setArea] = useState('')

// Handle user input
const handleInput = (e) => {
    setNewPermit({...newPermit, [e.target.name]: e.target.value})
}
const handleDateChange = (date) => {
setNewPermit({...newPermit, worksDate: date})
}
const handleStartTime = (time) => {
    setNewPermit({...newPermit, startTime: time})
}
const handleEndTime = (time) => {
    setNewPermit({...newPermit, endTime: time})
}

    return(
        <Paper component='section' sx={{ 
            width: '600px',
            bgcolor: '#ffffff',
            borderRadius: 1,
            p: '2rem', 
            margin: 2 }} >
        <Typography variant="h5" sx={{fontWeight: 500}}>Part 3 - Duration and Location of Work</Typography> 
        
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>Set the start and end date of the permit</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <Box component="div"  sx={{display: 'flex', mt: 2}}>
        <Box>
        <InputLabel sx={{fontSize: 12}}>Start date</InputLabel>
        <FormControl
            sx={{display: 'block', width: '11rem',
            m: 0.5, ml: 0
            }}>
            <DatePicker 
            name= 'worksDate'
            value={newPermit.worksDate}
            onChange={handleDateChange}
            slotProps={{ textField: { size: 'small' } }} />
        </FormControl>
        </Box>

        <Box>
        <InputLabel sx={{fontSize: 12, ml: '0.5rem'}}>Start time</InputLabel>
        <FormControl 
            sx={{display: 'block', width: '11rem',
            m: 0.5}}>
            <TimePicker 
            name= 'startTime'
            value={newPermit.startTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleStartTime} />
        </FormControl>
        </Box>

            <Typography sx={{color:'rgba(0, 0, 0, 0.6)', fontSize: 'small', 
            height: '1rem', alignSelf: 'center', pt: '1rem', mx: '0.3rem'}}>
                To</Typography>
        
        <Box>
        <InputLabel sx={{fontSize: 12, ml: '0.5rem'}}>End time</InputLabel>
        <FormControl 
            sx={{display: 'block', width: '11rem',
            m: 0.5}}>
            <TimePicker 
            name= 'endTime'
            value={newPermit.endTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleEndTime} />
        </FormControl>
        </Box>
        </Box>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>Set the designated area for the work</Typography>  
            <AlertIcon></AlertIcon>
        </Box>
        
        <FormControl required sx={{display: 'block',
                mb: 1, mt: 2 }}>
            <TextField
                select
                name= 'area'
                value={newPermit.area}
                label='Select area'
                onChange={handleInput}
                size='small' 
                sx={{width: '23rem'}}
                > 
                <MenuItem value="Hospital Block A">Hospital Block A</MenuItem>
                <MenuItem value="Hospital Block B">Hospital Block B</MenuItem>
                <MenuItem value="Hospital Block C">Hospital Block C</MenuItem>
                <MenuItem value="Hospital Block D">Hospital Block D</MenuItem>
            </TextField>
        </FormControl>
        </Paper>
    )
}