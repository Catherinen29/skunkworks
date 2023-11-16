import { Alert, Box, Button, Checkbox, Snackbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Frank from '../../frank.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthHotWorks({
    setOpenAuthHotWorks, 
    setShowAuthMsg, 
    setOpenPermitView,
    setPermitAuthorised}) {

const [agree, setAgree] = useState(false)
const [reminder, setReminder] = useState(false)

const handleAgreeButton = () => {
    if (agree) {
        setShowAuthMsg(true)
        setOpenPermitView(true)
        setPermitAuthorised(true)
        handleCloseAuthHotWorks()
    } else {
        setReminder(true)
    }
}
const handleCloseReminder = () => {
    setReminder(false)
}

const handleCloseAuthHotWorks = () => {
    setOpenAuthHotWorks(false)
}

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
                
                <Button onClick={handleCloseAuthHotWorks} sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                    <CloseIcon />
                </Button>
                
            </Box>

            <Typography variant="h5" sx={{fontWeight: 500}}>Authorise Hot Works Permit</Typography>

            
        </Box>

        {/* Overview */}
        <Box sx={{mx: '2rem', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Authorise Hot Works Permit</Typography>


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
            <Checkbox  sx={{pl: 0}} onChange={(e) => setAgree(!agree)} 
            style={{color:'#00a4a9'}} />
            <Typography>I understand the permit conditions and the fire safety 
                        precautions and my role as the responsible person. 
            </Typography>
        </Box>
            

        {/* Authorise button - checkbox required */}
            <Box sx={{my: '1rem'}}>
                <Button variant='contained' 
                        sx={{bgcolor: '#00a4a9'}}
                        onClick={handleAgreeButton}
                        >

                    AUTHORISE AND ISSUE PERMIT <CheckCircleIcon sx={{pl: '1rem'}} /></Button>
            </Box>
        </Box>

        <Box>
            <Snackbar open={reminder} autoHideDuration={6000}
                onClose={handleCloseReminder}>
                    <Alert  onClose={handleCloseReminder} severity='info'
                    sx={{width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                        You must agree to the conditions to authorise this permit.
                    </Alert>
            </Snackbar>
        </Box>



    </Box>

)
}