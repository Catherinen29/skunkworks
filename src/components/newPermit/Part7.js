import { Checkbox, FormControl, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"


export default function Part7() {

const [confirmed, setConfirmed] = useState(false)

    return (
        <Paper component='section' sx={{ 
            width: '40rem', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <Typography sx={{fontSize: 25}}>Part 7 - Declarations</Typography> 
        
        <Checkbox  sx={{pl: 0}} onChange={(e) => setConfirmed(!confirmed)} 
            style={{color:'#00a4a9'}} /> 
            I confirm that cold works have been considered and deemed not suitable.

        <FormControl sx={{
                mb: 1, mt: '1rem', width: '25rem' }}>
            <TextField multiline rows={3} size='small' label='Enter description'
             />
        </FormControl>

        </Paper>
    )
}