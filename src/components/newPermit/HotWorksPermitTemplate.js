import {useNavigate} from 'react-router-dom'
import { Box, Button, Typography, Toolbar, Link, Dialog, 
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

export default function NewHotWorksPermit({permits, setPermits, setPermitCreated, workers}) {

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
    type: 'Hot Works',
    supplier: '',
    supplierType: 'company',
    organisationType: '',
    createdBy: 'Francis Golder',
    status: 'Pre-authorisation',
    activatesAt: 'Activates at: Today at 15:00',
    expiresAt: '',
    scope: '',
    worksDate: '',
    startTime: dayjs('2022-01-01T00:00'),
    endTime: dayjs('2022-01-01T00:00'),
    area: '',
    activities: [''],
    operators: [''],
    respForHotWorks: '',
    respForFireSafety: '',
    riskAssessor: '',
    respForChecklist: '',
    respForFireWatch: '',
    watchDuration: ''
})

const handlePopulateFields = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setNewPermit({
        type: 'Hot Works',
        supplier: 'Travis Perkins',
        supplierType: 'company',
        organisationType: 'Carpentry',
        createdBy: 'Jan Goldstein',
        status: 'Pre-authorisation',
        activatesAt: 'Activates at: Today at 15:00',
        expiresAt: '',
        scope: 'The Hot Works permit for welding on a construction worksite...',
        worksDate: dayjs('2022-04-17'),
        startTime: dayjs('2022-04-17T10:00'),
        endTime: dayjs('2022-04-17T14:30'),
        area: 'Hospital Block A',
        activities: ['Brazing', 'Soldering'],
        operators: ['Tilda Swinton'],
        respForHotWorks: 'Tilda Swinton',
        respForFireSafety: 'Tilda Swinton',
        riskAssessor: 'Tilda Swinton',
        respForChecklist: 'Tilda Swinton',
        respForFireWatch: 'Tilda Swinton',
        watchDuration: '90 mins'
    })
}


// TODO:
const handleSavePermit = () => {
    setPermits([newPermit, ...permits])
    console.log('FIRST PERMIT: ', newPermit)
    setPermitCreated(true)
    navigate('/')
}

return(
<Box sx={{display: 'flex',  flexDirection: 'column', width: '100%'}}>

    <Toolbar 
    sx={{backgroundImage: `url(${BB_bg})`, backgroundSize: '100%', 
        backgroundRepeat: 'no-repeat', position: 'fixed', 
        zIndex: 2, boxShadow: 3,
        width: '100%', height: '4rem'}}
    >
    <Button onClick={() => navigate('/')}>
        {<CloseIcon sx={{color: '#ffffff'}} />} </Button>
    <Typography sx={{color: '#ffffff', fontSize: 20}}>New Permit</Typography>
    </Toolbar>

    <Box 
    display='flex'
    alignItems='center'
    justifycontent='center'
    sx={{ bgcolor: '#eef5f5', my: '4rem', flexDirection: 'column'}}>

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

    <Toolbar sx={{bgcolor:  '#ffffff', 
        display: 'flex', justifyContent: 'space-between', 
        position: 'fixed', zIndex: 2,
        bottom: 0, boxShadow: 3,
        width: '100%', height: '4rem'}}>

        <Box sx={{display: 'flex', flexDirection: 'row', height: 30, 
            justifyContent: 'center', alignItems: 'center'}}>

        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', mx: 1, fontSize: 12}}>Certchain secured</Typography>
        <Link  href="https://certchain.net/" sx={{color: '#00a4a9', mx: 1, fontSize: 12}}>What is this?</Link>
        </Box>

        <Box sx={{display: 'flex'}}>
        <Button variant="text" size='medium'
            sx={{color: '#00a4a9', 
            mx: 1, 
            "&:hover": {
                color: "#008488"}}}>
            <Typography sx={{fontWeight: 500}}>
                CANCEL</Typography>
        </Button>
        <Button variant="contained" size='medium'
            endIcon={<SaveIcon />}
            onClick={handlePopulateFields}
            sx={{bgcolor:  '#00a4a9', 
            mx: 1, 
            "&:hover": {
                bgcolor: "#008488"}}}>
            <Typography 
                sx={{ fontWeight: 500 }}>
                SAVE AS DRAFT</Typography>
            
        </Button>
        <Button variant="contained" size='medium'
            onClick={handleOnClickOpen} 
            sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', 
            ml: '1rem', mr: '3rem',
            "&:hover": {
                bgcolor: "#008488"}}}>
            <Typography 
                sx={{
                fontWeight: 500}}>
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
            <Button variant="text" size='medium'
                onClick={handleClose}
                sx={{color:  '#00a4a9', bgcolor: '#ffffff', fontWeight: 'bold', 
                mx: 1, 
                "&:hover": {
                    color: "#008488"}}}>
                <Typography sx={{fontWeight: 500}}>GO BACK</Typography>
            </Button>
            <Button variant="contained" size='medium'
                onClick={handleSavePermit}
                sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', 
                color: '#ffffff', 
                mx: 1, 
                "&:hover": {
                    bgcolor: "#008488"}}}>
                <Typography sx={{fontWeight: 500}}>CREATE PERMIT</Typography> 
            </Button>
        </DialogActions>
    </Dialog>
    </Box>
    )
}