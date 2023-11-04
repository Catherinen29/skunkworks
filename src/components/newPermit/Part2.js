import { Box, Button, FormControl, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Select, TextField, createTheme } from "@mui/material"

export default function Part2() {

    return (
        <Paper component="section" sx={{ 
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 2 - Scope of Work</h3>

        <div>
            <label>Description of the Hot Works to be undertaken</label>
        <FormControl sx={{
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Enter description</InputLabel>
            <TextField multiline size='small'
             />
        </FormControl>
        </div>


        </Paper>
    )
}