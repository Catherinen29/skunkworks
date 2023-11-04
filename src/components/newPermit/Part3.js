import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import dayjs from "dayjs"

export default function Part3() {

const [worksDate, setWorksDate] = useState()
const [startTime, setStartTime] = useState(dayjs('2022-04-17T00:00'))
const [endTime, setEndTime] = useState()

const handleChangeStart = (e) => {
    setStartTime(e)
}

const handleChangeEnd = (e) => {
    setEndTime(e)
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
        
        <InputLabel sx={{fontSize: 12}}>Start date</InputLabel>
        <FormControl>
            <DatePicker value={worksDate} />
        </FormControl>
        
        <div>
        <InputLabel sx={{fontSize: 12}}>Start time</InputLabel>
        <FormControl>
            <TimePicker value={startTime} onChange={handleChangeStart} />
        </FormControl>
        </div>

        <div>
        <InputLabel sx={{fontSize: 12}}>End time</InputLabel>
        <FormControl>
            <TimePicker value={endTime} onChange={handleChangeEnd} />
        </FormControl>
        </div>

        </Paper>
    )
}