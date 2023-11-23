import { Alert, Avatar, Box, Button, Card, Checkbox, Divider, 
    Snackbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
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
        <Card elevation={0} sx={{p: '2rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                mb: '1rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{color: '#04535f'}}>
                        <TaskAltIcon /></Box>
                    <Typography sx={{color: '#04535f', pl: '1rem'}}>CHECKLIST</Typography>
                </Box>
                
                <Button onClick={handleCloseAuthHotWorks} 
                sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                    <CloseIcon />
                </Button>
                
            </Box>

            <Typography variant="h5" sx={{fontWeight: 500}}>Authorise Hot Works Permit</Typography>

            
        </Card>

<Divider />

        {/* Overview */}
        <Box sx={{m: '2rem'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Authorise Hot Works Permit</Typography>


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

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1.2rem', height: '1.2rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 15}}>Supervisor</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>


        {/* Checkbox */}
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            <Checkbox  sx={{p: 0}} onChange={(e) => setAgree(!agree)} 
            style={{color:'#00a4a9'}} />
            <Typography>I understand the permit conditions and the fire safety 
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
                        onClick={handleAgreeButton}
                        >

                    <Typography sx={{fontWeight: 500}}>AUTHORISE AND ISSUE PERMIT</Typography>
                    <CheckCircleOutlineRoundedIcon 
                    sx={{ml: '0.5rem', height: '1.5rem', width: '1.5rem'}} /></Button>
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