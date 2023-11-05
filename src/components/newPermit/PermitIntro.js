import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography, createTheme } from "@mui/material"
import { useState } from "react"
import BalfourBeattyImage from '../../BalfourBeatty.png'

export default function PermitIntro() {

return (
    <Paper component="section" sx={{ 
        width: '40rem',
        bgcolor: '#04535f',
        borderRadius: 1,
        padding: 5,
        margin: 2,
        color: '#ffffff' }} >
        
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <img src={BalfourBeattyImage} width={150} height={150}></img>
        <Box sx={{border: 1, borderRadius: '16px', height: '8rem', width: '8rem', 
        display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography sx={{fontSize: 25, fontWeight:'fontWeightBold', width: '8rem', padding: '2rem'}}>Balfour Beatty</Typography>
        </Box>
    </Grid>

    <Grid item xs={8}>
        <Typography sx={{fontSize: 30}}>New Hot Works Permit</Typography> 

        <h2>NHS Southampton University Central Hospital</h2>

        <Typography>
            <p sx={{color:'red'}}>Tremona Road Southampton, Hampshire SO16 6YD</p>

            <p>Hot-work permits are required for any operation involving open flames or producing 
                heat and/or sparks and must be prepared by a competent person. Hot works include brazing, 
                torch cutting, grinding, soldering and welding.</p>
        </Typography>
    </Grid>
    </Grid>


        {/* </Masonry> */}
        </Paper>
    )
}