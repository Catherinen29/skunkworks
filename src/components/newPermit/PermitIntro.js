import { Grid, Paper, Typography } from "@mui/material"
import BalfourBeattyImage from '../../BalfourBeatty.png'

export default function PermitIntro() {

return (
    <Paper component='section' sx={{ 
        width: '40rem',
        bgcolor: '#04535f',
        borderRadius: 1,
        padding: 5,
        margin: 2,
        color: '#ffffff' }} >
        
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <img src={BalfourBeattyImage} width={150} height={150}></img>
    </Grid>

    <Grid item xs={8}>
        <Typography sx={{fontSize: 30}}>New Hot Works Permit</Typography> 

        <Typography sx={{fontSize:20, mt: 1}}>
            NHS Southampton University Central Hospital</Typography>

        <Typography sx={{color: 'rgba(255, 255, 255, 0.7)', mt: 1}}>
            Tremona Road Southampton, Hampshire SO16 6YD</Typography>

        <Typography sx={{mt: 2}}>Hot-work permits are required for any operation involving open flames or producing 
            heat and/or sparks and must be prepared by a competent person. Hot works include brazing, 
            torch cutting, grinding, soldering and welding.</Typography>
    </Grid>
    </Grid>

        </Paper>
    )
}