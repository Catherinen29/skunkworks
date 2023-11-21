import { Alert, AppBar, Avatar, Box, Button, Card, CardMedia, Checkbox, 
    Dialog, Modal, Toolbar, Typography } from "@mui/material";
// import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import weld_mask from '../../weld_mask.png'
import health_safety from '../../health_safety.png'
import face_id from '../../face_id.png'
import james from '../../james.png'
import { useState } from "react";

export default function SignPermit() {

const navigate = useNavigate()
const check1 = () => {
    console.log('CHECKING*********',)
}


const [signed, setSigned] = useState(false)
const [timer, setTimer] = useState(null)
const [alertVisible, setAlertVisible] = useState(false)
const handleSigning = () => {
    setAlertVisible(true)
    setTimer(
        setTimeout(() => {
            setAlertVisible(false)
            setSigned(true)
        }, 1000)
    )
}
const handleClose = () => {
    setAlertVisible(false)
 }

return (

        <Card sx={{width: '50%', display: 'flex', flexDirection:'column', m: 'auto', 
            justifyContent: 'center', alignItems: 'center'}}>
        

        {/* Toolbar */}
        <Box sx={{width: '100%', py: '1rem',
            bgcolor: '#04535f', color: 'white', 
            display: 'flex', flexDirection: 'column', 
            boxShadow: 5}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                width: '90%', m: '1rem'}}>
                <Button onClick={() => navigate('/finalpermits')} sx={{color: 'white'}}>
                    <ArrowBackIcon sx={{height: '3rem', width: '3rem'}}  />
                </Button>
                <Typography variant="h4" fontWeight={500}
                        sx={{mx: '1rem'}}>Task</Typography>   
                </Box>
            
        </Box>
        
        <Box sx={{bgcolor: '#eef5f5', width: '100%'}}>

            {/* Title */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h3" fontWeight={500}>Completion of Work</Typography>
                <Typography variant="h3" fontWeight={500}>Hot Works Permit</Typography>
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
                        sx={{borderColor: '#00a4a9', color: '#00a4a9', 
                        "&:hover": {
                            bgcolor: "white",
                            color: "#008488"}}}>
                        ADD MORE +</Button>   
                </Card>
            </Box>

            
            {/* Signature */}   
            {!signed &&
            <Box sx={{m: '2rem'}}>
                <Typography sx={{fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.6)', my: '1rem'}}>Digitial Signature</Typography>
                <Card sx={{p: '1rem'}}>
                    <Typography>Sign with your phone biometrics</Typography>
                    <Button variant="contained" 
                        disableElevation
                        onClick={handleSigning}
                        sx={{bgcolor:  '#00a4a9', mt: '1rem',
                        "&:hover": {
                            bgcolor: "#008488"}}}>
                        SIGN NOW </Button>
                </Card>
            </Box> 
            }
   
            {/* Face ID popup */}
            <Dialog open={alertVisible} onClose={handleClose}>
                <Box component='img' src={face_id}
                    sx={{color: 'white',
                    width: '10rem', height: '10rem',
                    display: 'flex', flexDirection: 'column', 
                    justifyContent: 'center', alignItems: 'center',
                    bgcolor: 'rgba(87, 87, 87)'
                    }}>
                </Box>
            </Dialog>   

            
            {/* Signed */}
            {signed && 
            <Box sx={{m: '2rem'}}>
                <Typography sx={{fontSize: 14, fontWeight: 500, color: 'rgba(0, 0, 0, 0.6)', my: '1rem'}}>Digitial Signature</Typography>
                <Card sx={{p: '1rem'}}>
                    <Typography>Signed</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar src={james} />
                        <Box sx={{mx: '1rem', my: '0.5rem'}}>
                            <Typography>James Worthington</Typography>
                            <Typography 
                                sx={{color: 'green', display: 'flex', alignItems: 'center', fontSize: 12}}>
                                <CheckCircleIcon sx={{color: 'green', height: '1rem', width: '1rem', mr: '0.5rem'}} />
                                Verified
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box> 
            }
               
        </Box>   



        <Card disableElevation
            sx={{display: 'flex', flexDirection:'column', width: '100%', 
            alignItems: 'center', pt: '1rem', pb: '3rem'}}>
            <Button variant='contained' disabled={signed === false} 
                onClick={() => navigate('/completedpermit')}
                sx={{bgcolor:'#00a4a9', color: '#ffffff', width: '90%',
                "&:hover": {
                    bgcolor: "#008488"}}}>
                    <Typography>COMPLETE
                    </Typography> 
                    <CheckCircleOutlineIcon sx={{mx: '1rem'}} /></Button>
        </Card> 
</Card>
            
)
}