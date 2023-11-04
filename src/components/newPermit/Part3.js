import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import dayjs from "dayjs"

export default function Part3() {

const [worksDate, setWorksDate] = useState()
const [startTime, setStartTime] = useState(dayjs('2022-04-17T00:00'))
const [endTime, setEndTime] = useState(dayjs('2022-04-17T00:00'))
const [area, setArea] = useState('')

const handleChangeStart = (e) => {
    setStartTime(e)
}

const handleChangeEnd = (e) => {
    setEndTime(e)
}

const handleChangeArea = (e) => {
    setArea(e.target.value)
}

    return(
        <Paper component="section" sx={{ 
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 3 - Duration and Location of Work</h3> 
        

        <label>Set the start and end date of the permit</label>
        <Box component="div"  sx={{display: 'inline-flex'}}>
        
        <div>
        <InputLabel sx={{fontSize: 12}}>Start date</InputLabel>
        <FormControl required size='small' sx={{display: 'block',
                ml: 0.5, mr: 0.5}}>
            <DatePicker value={worksDate}
            slotProps={{ textField: { size: 'small' } }} />
        </FormControl>
        </div>

        <div>
        <InputLabel sx={{fontSize: 12}}>Start time</InputLabel>
        <FormControl required size='small' sx={{display: 'block',
                ml: 0.5, mr: 0.5}}>
            <TimePicker value={startTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleChangeStart} />
        </FormControl>
        </div>

        <div>
        <InputLabel sx={{fontSize: 12}}>End time</InputLabel>
        <FormControl required size='small' sx={{display: 'block',
                 ml: 0.5, mr: 0.5}}>
            <TimePicker value={endTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleChangeEnd} />
        </FormControl>
        </div>
        </Box>


        <div>
        
        <FormControl required size='small' sx={{display: 'block',
                margin: 2 }}>
            <InputLabel sx={{fontSize: 12}}>Select area</InputLabel>
            <Select
                value={area}
                label="Select area *"
                onChange={handleChangeArea}
                sx={{width: '50%'}}
                > 
                <MenuItem value="Hospital Block A">Hospital Block A</MenuItem>
                <MenuItem value="Hospital Block B">Hospital Block B</MenuItem>
                <MenuItem value="Hospital Block C">Hospital Block C</MenuItem>
                <MenuItem value="Hospital Block D">Hospital Block D</MenuItem>           
            </Select>
        </FormControl>
        </div>
        </Paper>
    )
}