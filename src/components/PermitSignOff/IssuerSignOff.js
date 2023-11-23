import { Alert, Avatar, Box, Button, Checkbox, Dialog, Divider, Fab, Snackbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CircularProgress from '@mui/material/CircularProgress';
import Frank from '../../frank.png'
import { useEffect, useRef, useState } from "react";

export default function IssuerSignOff({
    setOpenIssuerSignOff, 
    setOpenGoldenTimeline, 
    setShowCompleteMsg, 
    setSuccess
    }) {

const [agree, setAgree] = useState(false)
const [reminder, setReminder] = useState(false)


const handleCloseIssuerSignOff = () => {
    setOpenIssuerSignOff(false)
}

const handleCloseLoad = () => {
    setAgree(false)
    setLoadVisible(false)
    setOpenIssuerSignOff(false)
}

const handleCloseReminder = () => {
    setReminder(false)
}

const [loadVisible, setLoadVisible] = useState(false)
const [loading, setLoading] = useState(false)
const [progress, setProgress] = useState(10)
const timer = useRef(10)

const handleSignOff = () => {
    if (agree) {
        setLoadVisible(true) 
        setProgress(10)
        setLoading(true)

        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
              setSuccess(true);
              setLoading(false);
              setLoadVisible(false)
              setOpenIssuerSignOff(false)
              setOpenGoldenTimeline(true)
              setShowCompleteMsg(true)
            }, 2500);
          }

    } else {
        setReminder(true)
    }
}


useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 30));
    }, 800);
    return () => {
      clearInterval(timer);
      clearTimeout(timer.current)
    };
  }, []);

return (

    <Box>
        {/* Title */}
        <Box sx={{p: '2rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                mb: '1rem'}}>
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

<Divider />

        {/* Overview */}
        <Box sx={{m: '1.5rem'}}>
            <Typography 
                sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 14, fontWeight: 500}}>
                Sign-off Hot Works Permit</Typography>


            <Box sx={{my: '1rem'}}>
                
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <Avatar src={Frank} width={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Francis Golder (Me)</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Balfour Beatty</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '5rem', height: '1.5rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', mr: '0.5rem'}}>
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
            <Checkbox  sx={{py: 0, pl: 0, pr: 1, alignSelf: 'flex-start'}} onChange={() => setAgree(prev => !prev)} 
            style={{color:'#00a4a9'}} />
            <Typography>I understand the permit conditions and the fire and safety 
                        precautions and my role as the responsible person. 
            </Typography>
        </Box>
            

        {/* Authorise button - checkbox required */}
            <Box sx={{my: '1rem'}}>
                <Button variant='contained' 
                        sx={{bgcolor: '#00a4a9',
                        color: '#ffffff',
                        "&:hover": {
                            bgcolor: "#008488"}}}
                        onClick={handleSignOff}
                        >
                    <Typography sx={{fontWeight: 500}}>SIGN-OFF PERMIT</Typography>
                    <CheckCircleOutlineRoundedIcon 
                    sx={{ml: '0.5rem', height: '1.5rem', width: '1.5rem'}} />
                </Button>
            </Box>
        </Box>

{/* Reminder to agree to terms before signing off */}
        <Box>
            <Snackbar open={reminder} autoHideDuration={6000}
                onClose={handleCloseReminder}>
                    <Alert  onClose={handleCloseReminder} severity='info'
                    sx={{width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                        You must agree to the conditions to authorise this permit.
                    </Alert>
            </Snackbar>
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
            
            {loading && (
                <Box sx={{ position: 'relative', display: 'inline-flex', m: '1.5rem'}}>
                <CircularProgress
                    size={68}
                    sx={{
                    color: '#00a4a9',
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1,
                    
                    }}
                />
                <Fab>
                    {`${Math.round(progress)}%`}
                </Fab>
                
                </Box>
            )}

            <Button variant="contained" disableElevation 
                onClick={handleCloseLoad}
                sx={{bgcolor: 'white', color: '#00a4a9'}}>CANCEL</Button>
            </Box> 
   


    </Dialog>
    </Box>

)
}
