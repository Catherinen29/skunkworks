import { Alert, AppBar, Box, Button, Card, CardMedia, Checkbox, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Fade from '@mui/material/Fade';
import { Check, CheckBox } from "@mui/icons-material";
import weld_mask from '../../weld_mask.png'
import health_safety from '../../health_safety.png'
import { useState } from "react";

export default function SignPermit() {

const navigate = useNavigate()
const check1 = () => {
    console.log('CHECKING*********',)
}


const [signed, setSigned] = useState(false)
const handleSigning = () => {
    setSigned(true)
    setAlertVisible(true)
}
const [alertVisible, setAlertVisible] = useState(false)

return (
    // <Box sx={{display: 'flex', alignItems: 'center', width: '50%'}}>
        <Card sx={{width: '40%', display: 'flex', flexDirection:'column', m: 'auto'}}>
        {/* Toolbar */}
        <Box sx={{height: '4rem', bgcolor: '#04535f', color: 'white', 
        display: 'flex', alignItems: 'center', boxShadow: 5}}>

            <Button onClick={() => navigate('/permits')} sx={{color: 'white'}}>
                <ArrowBackIcon />
            </Button>
            <Typography>Task</Typography>

        </Box>
        
        <Box sx={{bgcolor: '#eef5f5'}}>

        {/* Title */}
        <Box sx={{m: '2rem'}}>
            <Typography variant="h4">Completion of Work</Typography>
            <Typography variant="h4">Hot Works Permit</Typography>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>HW234617</Typography>
        </Box>

        {/* Declarations */}
        <Box sx={{m: '2rem'}}>
            <Typography sx={{fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.6)', my: '1rem'}}>Declarations</Typography>
            <Card sx={{my: '1rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', 
                    ml: '1rem', mr: '1.5rem', my: '2rem'}}>
                    <Checkbox onChange={check1} style={{color: '#00a4a9', padding: 0}} />
                    <Typography sx={{pl: '1rem'}}>I confirm that the work has been 
                        completed and the area has been 
                        checked and is safe.</Typography>    
                </Box>
                
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', ml: '1rem', mr: '1.5rem', my: '2rem'}}>
                <Checkbox onChange={check1} style={{color: '#00a4a9', padding: 0}} />
                    <Typography sx={{pl: '1rem'}}>I confirm that work was stopped by 1
                        hour before the end of the shift. 
                    </Typography>
                </Box>
            </Card>            
        </Box>

    
        {/* Photo evidence */}
        <Box sx={{m: '2rem'}}>
            <Typography sx={{fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.6)', my: '1rem'}}>Photo Evidence</Typography>
            {/* Photos */}
            <Card sx={{p: '1rem'}}>
                    
                <Typography>Provide photo evidence to support the declaration</Typography>

                <Box sx={{my: '1rem'}}>
                    <Box component='img' src={weld_mask} sx={{width: 80, height: 80, mr: '1rem'}} />
                    <Box component='img' src={health_safety} sx={{width: 80, height: 80}} /> 
                </Box>
                
                <Button variant="outlined" 
                    sx={{borderColor: '#00a4a9', color: '#00a4a9'}}>
                    ADD MORE +</Button>   
            </Card>
            
        </Box>


        {/* Signature */}   
        <Box sx={{m: '2rem'}}>
            <Typography sx={{fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.6)', my: '1rem'}}>Digitial Signature</Typography>
            <Card sx={{p: '1rem'}}>
                <Typography>Sign with your phone biometrics</Typography>
                <Button variant="contained" onClick={handleSigning}
                        sx={{bgcolor:  '#00a4a9', color: 'white', mt: '1rem'}}>
                    SIGN NOW </Button>
            </Card>
        </Box>    


        </Box>   

        <Card disableElevation
                sx={{display: 'flex', flexDirection:'column', justifyContent: 'stretch', 
                alignItems: 'center', pt: '2rem', pb: '2rem'}}>
            <Button variant='contained' disabled={signed === false} 
                sx={{bgcolor:'#00a4a9', width: '90%'}}>COMPLETE <CheckCircleOutlineIcon sx={{mx: '1rem'}} /></Button>
        </Card> 
</Card>
            

)
}