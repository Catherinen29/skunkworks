import { Box, Checkbox, FormControl, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"


export default function Part7() {

const [confirmed, setConfirmed] = useState(false)

    return (
        <Paper component='section' sx={{ 
            width: '600px', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            p: '2rem', 
            margin: 2 }} >
        <Typography variant="h5" sx={{fontWeight: 500}}>Part 7 - Declarations</Typography> 
        
        <Box sx={{display: 'flex', alignItems: 'center', mt: '1rem'}}>
        <Checkbox  sx={{pl: 0, color:'#00a4a9'}} onChange={(e) => setConfirmed(!confirmed)} 
             /> 
        <Typography sx={{fontSize: 14}}>
            I confirm that cold works have been considered and deemed not suitable.</Typography>
            
        </Box>
        
        <FormControl sx={{
                mb: 1, mt: '0.5rem', width: '25rem' }}>
            <TextField 
                multiline 
                rows={3} 
                size='small' 
                label='Enter description'
             />
        </FormControl>

        </Paper>
    )
}