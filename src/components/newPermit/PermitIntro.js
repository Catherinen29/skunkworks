import { Box, Paper, Typography } from "@mui/material"

export default function PermitIntro() {

return (
    <Paper component='section' sx={{ 
        width: '600px',
        bgcolor: '#04535f',
        borderRadius: 1,
        p: '2rem',
        pl: '1rem',
        margin: 2,
        color: '#ffffff' }} >
        
    
        
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
    <Box>
        <Box sx={{border: 1, 
            borderColor: 'white', 
            borderRadius: '10%',
            width: 100, 
            height: 100,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
            }}>
        <Typography variant="h5" sx={{fontFamily: 'Anton', 
            pl: '15%',
            lineHeight: 1}}>
                Balfour
                Beatty
                </Typography>
        </Box>
    </Box>

    <Box sx={{ml: '2rem'}}>
        <Typography variant="h4">New Hot Works Permit</Typography> 

        <Typography 
            sx={{fontSize: 18, fontWeight: 500, mt: 1}}>
            NHS Southampton University Central Hospital</Typography>

        <Typography 
            sx={{fontSize: 14, color: 'rgba(255, 255, 255, 0.7)', mt: 1}}>
            Tremona Road Southampton, Hampshire SO16 6YD</Typography>

        <Typography 
            sx={{mt: 2, fontSize: 14}}>
            Hot-work permits are required for any operation involving open flames or producing 
            heat and/or sparks and must be prepared by a competent person. Hot works include brazing, 
            torch cutting, grinding, soldering and welding.</Typography>
    </Box>
    </Box>

        </Paper>
    )
}