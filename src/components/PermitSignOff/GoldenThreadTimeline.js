import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import { Timeline } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";


export default function GoldenThreadTimeline({setOpenGoldenTimeline}) {

const handleClose = () => {
    setOpenGoldenTimeline(false)
}

return (
<Box>
    
    {/* Title */}
    <Box sx={{p: '2rem'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{color: '#04535f'}}>
                    <NewspaperIcon /></Box>
                <Typography sx={{color: '#04535f', pl: '1rem'}}>GOLDEN THREAD TIMELINE</Typography>    
            </Box>
            
            <Button onClick={handleClose} sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                <CloseIcon />
            </Button>
            
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', my: '1rem'}}>
            <Typography variant="h5" sx={{fontWeight: 500}}>Hot Works Permit</Typography>
            <Typography sx={{mx: '1rem'}}>HW087327</Typography>    
        </Box>


        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontWeight: 500, mb: '2rem'}}>
            NHS Southampton University Central Hospital
        </Typography>

    </Box>

        <Divider />

    <Box sx={{my: '1rem'}}>

    
    <Timeline>
    
    <Typography 
        sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: '1rem'}}>
        1 Nov 23</Typography>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    Hot Works Permit completed
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Automated - Certchain Permits</Typography>
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
                </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    Issuer sign-off completed
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Francis Golder | Balfour Beatty</Typography>
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
                </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Operator sign-off completed</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Jackie Mason | Ackrington Chambers</Typography>
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
                </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Fire Safety sign-off completed</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Jackie Mason | Ackrington Chambers</Typography>

                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Hot Works permit active</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Automated - Certchain permits</Typography>
           
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Hot Works permit authorised</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Francis Golder | Balfour Beatty</Typography>
            
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Precaution checklist compelted</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>James Worthington | Ackrington Chambers</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

    <Typography 
        sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', m: '1rem'}}>
        30 Oct 23</Typography>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Issuer signature completed</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Barry White | Balfour Beatty</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Supervisor signature completed</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Barry White | Balfour Beatty</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Operator signature completed</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Barry White | Balfour Beatty</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />                 
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Risk assessment compelted</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Barry White | Balfour Beatty</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

    <Typography 
        sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', m: '1rem'}}>
        13 Oct 23</Typography>

        <TimelineItem sx={{':before': {flex: 0}}}>
            <TimelineSeparator>
                <TimelineDot />              
            </TimelineSeparator>
                <TimelineContent>
                    <Typography>Permit created</Typography>
                    <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>Saqib Sabir | Balfour Beatty</Typography>
                
                    <ArrowForwardIosRoundedIcon sx={{fontSize: 14, mr: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

    </Timeline>
    

    </Box>
</Box>
)
}