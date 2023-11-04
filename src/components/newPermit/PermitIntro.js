import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography, createTheme } from "@mui/material"
import { useState } from "react"


export default function PermitIntro() {

    return (
        <Paper component="section" sx={{ 
            width: '70%',
            bgcolor: '#04535f',
            borderRadius: 1,
            padding: 3,
            margin: 2,
            color: '#ffffff' }} >
        <h1>New Hot Works Permit</h1> 
        
        <h2>NHS Southampton University Central Hospital</h2>

        <Typography>
            <p sx={{color:'red'}}>Tremona Road Southampton, Hampshire SO16 6YD</p>

            <p>Hot-work permits are required for any operation involving open flames or producing 
                heat and/or sparks and must be prepared by a competent person. Hot works include brazing, 
                torch cutting, grinding, soldering and welding.</p>
        </Typography>
        </Paper>
    )
}