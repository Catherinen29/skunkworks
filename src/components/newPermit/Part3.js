import { Box, FormControl, InputLabel, MenuItem, Paper, 
    TextField, TableBody, TableRow, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import dayjs from "dayjs"
import AlertIcon from "../common/AlertIcon"

export default function Part3({newPermit, setNewPermit}) {

const [worksDate, setWorksDate] = useState()
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
            width: '40rem',
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <Typography sx={{fontSize: 25}}>Part 3 - Duration and Location of Work</Typography> 
        
        <TableBody sx={{mt: 2}}>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Set the start and end date of the permit</Typography>  
            <AlertIcon></AlertIcon>
        </TableRow>
        </TableBody>
        <br />
        <Box component="div"  sx={{display: 'inline-flex', mt: 2}}>
        <div>
        <InputLabel sx={{fontSize: 12}}>Start date</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                ml: 0.5, mr: 0.5}}>
            <DatePicker 
            name= 'worksDate'
            value={newPermit.worksDate}
            onChange={handleDateChange}
            slotProps={{ textField: { size: 'small' } }} />
        </FormControl>
        </div>

        <div>
        <InputLabel sx={{fontSize: 12}}>Start time</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                ml: 0.5, mr: 0.5}}>
            <TimePicker 
            name= 'startTime'
            value={newPermit.startTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleStartTime} />
        </FormControl>
        </div>

            <Typography sx={{color:'rgba(0, 0, 0, 0.6)', fontSize: 'small', 
            height: '1rem', alignSelf: 'center'}}>
                To</Typography>
        
        <div>
        <InputLabel sx={{fontSize: 12}}>End time</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                 ml: 0.5, mr: 0.5}}>
            <TimePicker 
            name= 'endTime'
            value={newPermit.endTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleEndTime} />
        </FormControl>
        </div>
        </Box>

        <br /> <br />
        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Set the designated area for the work</Typography>  
            <AlertIcon></AlertIcon>
        </TableRow>
        </TableBody>
        
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
            <TextField
                select
                name= 'area'
                value={newPermit.area}
                label='Select area'
                onChange={handleInput}
                sx={{width: '25rem'}}
                > 
                <MenuItem value="Hospital Block A">Hospital Block A</MenuItem>
                <MenuItem value="Hospital Block B">Hospital Block B</MenuItem>
                <MenuItem value="Hospital Block C">Hospital Block C</MenuItem>
                <MenuItem value="Hospital Block D">Hospital Block D</MenuItem>
            </TextField>
        </FormControl>
        </div>
        </Paper>
    )
}