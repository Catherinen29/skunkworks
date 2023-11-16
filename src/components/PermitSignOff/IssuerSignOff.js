import { Alert, Box, Button, Checkbox, Dialog, Snackbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CircularProgress from '@mui/material/CircularProgress';
import Frank from '../../frank.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IssuerSignOff({
    setOpenIssuerSignOff}) {

const [agree, setAgree] = useState(false)
const [reminder, setReminder] = useState(false)
// const [completingMsg, setCompletingMsg] = useState(false)



const handleCloseIssuerSignOff = () => {
    setOpenIssuerSignOff(false)
}

const handleCloseLoad = () => {
    setAgree(false)
    setLoadVisible(false)
    setOpenIssuerSignOff(false)
}

const [loadVisible, setLoadVisible] = useState(false)
const [loading, setLoading] = useState(false)
const [progress, setProgress] = useState(10)



return (

    <Box>
        {/* Title */}
        <Box sx={{p: '2rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                mb: '2rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{color: '#04535f'}}>
                        <TaskAltIcon /></Box>
                    <Typography sx={{color: '#04535f', pl: '1rem'}}>CHECKLIST</Typography>
                </Box>
                
                <Button onClick={handleCloseIssuerSignOff} sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                    <CloseIcon />
                </Button>
                
            </Box>

            <Typography variant="h5" sx={{fontWeight: 500}}>Issuer Sign-off</Typography>

            
        </Box>

        {/* Overview */}
        <Box sx={{mx: '2rem', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Sign-off Hot Works Permit</Typography>


            <Box sx={{my: '1rem'}}>
                
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <img src={Frank} width={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Francis Golder (Me)</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 14}}>Balfour Beatty</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '4.55rem', height: '1.4rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 12, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1rem', height: '1rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Supervisor</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>


        {/* Checkbox */}
        
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Checkbox  sx={{pl: 0}} onChange={() => setAgree(prev => !prev)} 
            style={{color:'#00a4a9'}} />
            <Typography>I understand the permit conditions and the fire and safety 
                        precautions and my role as the responsible person. 
            </Typography>
        </Box>
            

        {/* Authorise button - checkbox required */}
            <Box sx={{my: '1rem'}}>
                <Button variant='contained' 
                        sx={{bgcolor: '#00a4a9'}}
                        onClick={handleSignOff}
                        >

                    AUTHORISE AND ISSUE PERMIT <CheckCircleIcon sx={{pl: '1rem'}} /></Button>
            </Box>
        </Box>


{/* Load after signing */}

    <Dialog open={loadVisible} onClose={handleCloseLoad}>
    <Box sx={{width: '30rem', height: '18rem', 
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center'}}>

            <Box sx={{
                display: 'flex', flexDirection: 'column', 
                justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{fontSize: 18, fontWeight: 500}}>Completing permit</Typography>
                <Typography sx={{fontSize: 16}}>Hot Works</Typography>
            </Box>

            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            
                <CircularProgress variant="determinate" {...progress} />

                <Box
                    sx={{
                    top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                <Typography variant="caption" component="div">
                {`${Math.round(progress)}%`}
                </Typography>
                </Box>
            </Box>
            
            <Button variant="contained" disableElevation 
                onClick={handleCloseLoad}
                sx={{bgcolor: 'white', color: '#00a4a9'}}>CANCEL</Button>
            </Box> 
   


    </Dialog>
    </Box>

)
}
