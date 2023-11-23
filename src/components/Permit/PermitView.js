import { Alert, Box, Button, Card, CardActionArea, Checkbox, Dialog, 
    DialogContent, DialogTitle, Divider, List, ListItem, 
    Snackbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Frank from '../../frank.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorisedStatusTag } from "../common/PermitStatusTags";

export default function PermitView({setOpenPermitView}) {

const navigate = useNavigate()

const [agree, setAgree] = useState(false)

const handleClosePermitView = () => {
    setOpenPermitView(false)
}

// Manage move on screen
const [openMoveOn, setOpenMoveOn] = useState(false)
const handleOpenMoveOn = () => {
    setOpenMoveOn(true)
}
const handleCloseMoveOn = () => {
    setOpenMoveOn(false)
}

return (

    <Box>
        {/* Title */}
        <Card elevation={0} sx={{p: '2rem'}}>
            <CardActionArea onClick={handleOpenMoveOn}>

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                mb: '1rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{color: '#04535f'}}>
                    <NewspaperIcon /></Box>
                    <Typography sx={{color: '#04535f', pl: '1rem'}}>PERMIT</Typography>
                </Box>
                
                <Button onClick={handleClosePermitView} sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                    <CloseIcon />
                </Button>
                
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Box sx={{width: '3rem', height: '3rem', borderRadius: '10%', 
                    bgcolor: '#04535f', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}><WhatshotIcon /></Box>  

                <Typography variant="h5" sx={{fontWeight: 500, mx: '1rem'}}>Hot Works Permit</Typography>
            </Box>

            </CardActionArea>
        </Card>

<Divider />
        {/* Overview */}
        <Box sx={{m: '2rem'}}>
            <Typography sx={{mb: '0.5rem', color: 'rgba(0, 0, 0, 0.6)'}}>Status</Typography>
            <AuthorisedStatusTag />


            <Box sx={{my: '1rem'}}>
                
            <Typography sx={{mb: '0.5rem', color: 'rgba(0, 0, 0, 0.6)'}}>Scope of Work</Typography>
            <Typography paragraph>
                The Hot Works permit for welding on a construction worksite 
                entails employing the TIG/GTAW welding method to achieve 
                precise and clean welds on steel l-beams, demand expertise in 
                operating specialised equipment and adhering to stringent safety 
                protocols to prevent hazards and ensure structural integrity. 
            </Typography>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Location</Typography>
                <Typography>Section 5, Hospital Block A</Typography>
            </Box>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Start date</Typography>
                <Typography>1 Nov 2023 at 09:00 GMT</Typography>
            </Box>     

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Expiry date </Typography>
                <Typography>1 Nov 2023 at 17:00 GMT</Typography>
            </Box>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
                    Types of activity covered by the permit</Typography>
                <List  sx={{py: 0}}>
                    <ListItem sx={{px: 0}}>Welding inc. Thermic</ListItem>
                    <ListItem sx={{px: 0}}>Soldering</ListItem>
                    <ListItem sx={{px: 0}}>Gas Cutting</ListItem>
                </List>
            </Box>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Fire watch duration</Typography>
                <Typography>90 minutes</Typography>
            </Box>


            </Box>


        </Box>


{/* Move on screen */}
<Dialog open={openMoveOn} onClose={handleCloseMoveOn} 
    disableElevation
    fullScreen
    PaperProps={{
        sx: {
          backgroundColor: '#15181f',
        }}}
    >
    <Box sx={{display: 'flex', flexDirection: 'column', p: '4rem'}}>
    <DialogTitle>
        <Typography variant="h5" 
        sx={{color: '#ffffff'}}>
            CERTCHAIN</Typography>
        <Typography variant="h5" 
        sx={{color: '#717580'}}>
            DIGITAL PERMIT DEMO</Typography>
    </DialogTitle>
    <DialogContent sx={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="text"
         onClick={() => navigate('/projectpermits')}
            sx={{width: '50rem', height: '20rem', 
            color: '#ffffff'}}>
        <Typography variant="h5" >SWITCH TO THE OPERATOR IN THE MOBILE APP</Typography>
        </Button>
    </DialogContent>
    </Box>
</Dialog>


</Box>


)
}