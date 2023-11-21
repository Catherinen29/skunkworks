import {useNavigate} from 'react-router-dom'
import { Box, Button, ButtonBase, Typography, Toolbar, Link, Dialog, 
    DialogTitle, DialogContent, DialogActions } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import PermitIntro from "./PermitIntro";
import BB_bg from "../../BB_bg.png"
import { useState } from "react";
import dayjs from "dayjs"

export default function NewHotWorksPermit({permits}) {

const navigate = useNavigate()

// Handle saving of permit:
const [open, setOpen] = useState(false)
const handleOnClickOpen = () => {
    setOpen(true)
}
const handleClose = () => {
    setOpen(false)
}

// Handle new permit
const [newPermit, setNewPermit] = useState({
    type: '',
    supplier: '',
    supplierType: 'company',
    organistionType: '',
    createdBy: '',
    status: 'Pre-authorisation',
    activatesAt: '',
    expiresAt: '',
    scope: '',
    worksDate: '',
    startTime: dayjs('2022-01-01T00:00'),
    endTime: dayjs('2022-01-01T00:00'),
    area: '',
    activities: [],
    operators: [],
    respForHotWorks: '',
    respForFireSafety: '',
    riskAssessor: '',
    respForChecklist: '',
    watchDuration: ''
})


// TODO:
const handleSavePermit = () => {
    console.log('Permit Saved')
    console.log('********* NEW PERMIT: ', newPermit)
    permits.unshift(newPermit)
    navigate('/')
}

return(
<Box sx={{display: 'flex', flexDirection: 'column'}}>

    <Toolbar 
    sx={{backgroundImage: `url(${BB_bg})`, backgroundSize: '100%', 
        backgroundRepeat: 'no-repeat'}}
    >
    <Button onClick={() => navigate('/')}>
        {<CloseIcon sx={{color: '#ffffff'}} />} </Button>
    <Typography sx={{color: '#ffffff', fontSize: 20}}>New Permit</Typography>
    </Toolbar>

    <Box 
    display='flex'
    alignItems='center'
    justifycontent='center'
    sx={{ bgcolor: '#eef5f5', flexDirection: 'column'}}>

        <PermitIntro />
        <Part1 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part2 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part3 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part4 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part5 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part6 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
        <Part7 newPermit={newPermit} 
                setNewPermit={setNewPermit} />
    </Box>

    <Toolbar sx={{bgcolor:  '#ffffff', display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', height: 30, 
            justifyContent: 'center', alignItems: 'center'}}>
        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', mx: 1, fontSize: 12}}>Certchain secured</Typography>
        <Link  href="https://www.google.com" sx={{color: '#00a4a9', mx: 1, fontSize: 12}}>What is this?</Link>
        </Box>

        <Box sx={{display: 'flex'}}>
        <Button variant="text" 
            sx={{color: '#00a4a9', fontWeight: 'bold', 
            mx: 1, 
            "&:hover": {
                color: "#008488"}}}>
            <Typography sx={{pt: '0.2rem', fontWeight: 500, fontSize: 14}}>
                CANCEL</Typography>
        </Button>
        <Button variant="contained" 
            sx={{bgcolor:  '#00a4a9', 
            mx: 1, 
            "&:hover": {
                bgcolor: "#008488"}}}>
            <Typography 
                sx={{pt: '0.2rem', 
                fontWeight: 500, fontSize: 14,}}>
                SAVE AS DRAFT</Typography>
            {<SaveIcon sx={{ml: 1}} />}
        </Button>
        <Button variant="contained" onClick={handleOnClickOpen} 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1,
            "&:hover": {
                bgcolor: "#008488"}}}>
            <Typography 
                sx={{pt: '0.2rem', 
                fontWeight: 500, fontSize: 14}}>
                CREATE PERMIT</Typography>
        </Button>
        </Box>
        </Toolbar>

    <Dialog keepMounted open={open} onClose={handleClose}
            sx={{width: '35rem', margin: 'auto'}}>
        <DialogTitle variant='h5'>Ready to create permit?</DialogTitle>            
        <DialogContent>
            <Typography>
                This will issue the permit in a pre-authorised state, 
                assign a ticket to you in the Compliance Monitoring Dashboard, and 
                send tack notifications to the people added to the permit.
            </Typography>
        </DialogContent>
        <DialogActions sx={{mb: '0.5rem'}}>
            <Button variant="text" onClick={handleClose}
                sx={{color:  '#00a4a9', bgcolor: '#ffffff', fontWeight: 'bold', mx: 1, 
                "&:hover": {
                    color: "#008488"}}}>GO BACK</Button>
            <Button variant="contained" onClick={handleSavePermit}
                sx={{bgcolor:  '#00a4a9', color: '#ffffff', 
                fontWeight: 'bold', mx: 1, 
                "&:hover": {
                    bgcolor: "#008488"}}}>
                CREATE PERMIT </Button>
        </DialogActions>
    </Dialog>
    </Box>
    )
}