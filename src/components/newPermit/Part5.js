import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, 
    FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, 
    TextField, createTheme, TableBody, TableRow, Typography, Tooltip, Alert } from "@mui/material"
import { useState } from "react"

export default function Part5() {
    const currentUser = "Francis Golder (me)"
    const [precautionPerson, setPrecautionPerson] = useState('')
    
    const handlePrecautionPerson = (e) => {
        setPrecautionPerson(e.target.value)
    }
    
        return (
            <Paper component="section" sx={{ 
                width: '40rem', 
                bgcolor: '#ffffff',
                borderRadius: 1,
                padding: 3,
                margin: 2 }} >
            <h3>Part 5 - Precautions Checklist</h3> 
             
            <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for completing pre-commencement checklist</Typography>  
            <Tooltip title='Duration of works'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
            <FormControl required size="small" sx={{display: 'block',
                    width: '90%', mt: 2 }}>
            <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
                <Select
                value={precautionPerson}
                onChange={handlePrecautionPerson}
                sx={{width: '25rem'}}> 
                    <MenuItem value={currentUser}>{currentUser}</MenuItem>
                    <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                    <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
                </Select>
            </FormControl>
            </div>
    
            </Paper>
    )
}