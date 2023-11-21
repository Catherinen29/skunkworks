import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, 
    TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function GoldenThreadTimeline({setOpenGoldenTimeline}) {

const handleClose = () => {
    setOpenGoldenTimeline(false)
}


return (
<>
    
    {/* Title */}
    <Box sx={{p: '2rem', pb: '1rem'}}>
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


    <Box sx={{ overflow: 'auto' }}>

    <Stack direction="column" gap={2}>
        <Typography variant="caption" sx={{mx: 2, mt: 2}}>1 Nov 23</Typography>

        <Timeline 
            sx={{p: 0, m: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  }
                }}>
            
        <TimelineItem sx={{mx: 1}}>
            <TimelineSeparator>
                <CheckCircleOutlineRoundedIcon sx={{fontSize: 25, my: '0.5rem', color: '#4caf50'}} />
                <TimelineConnector sx={{ height: '37px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>   
                <Stack direction="column" gap={0.5}>
                    <Typography variant="body1">Hot Works Permit completed </Typography>
                    <Typography variant="caption">Automated - Certchain Permits</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5} >
                <Typography variant="body1">Issuer sign-off completed</Typography>
                <Typography variant="caption">Francis Golder | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Operator sign-off completed</Typography>
                <Typography variant="caption" 
                    sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                        Jackie Mason | Ackrington Chambers</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Fire Safety sign-off completed</Typography>
                <Typography variant="caption">Jackie Mason | Ackrington Chambers</Typography>
                </Stack>
            <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 1}}>
            <TimelineSeparator>
                <CheckCircleOutlineRoundedIcon sx={{fontSize: 25, mx: -0.3, my: '0.5rem', color: '#4caf50'}} />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Hot Works permit active</Typography>
                <Typography variant="caption"
                    sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}
                    >Automated - Certchain permits</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Hot Works permit authorised</Typography>
                <Typography variant="caption"
                    sx={{color: 'rgba(0, 0, 0, 0.6)'}}
                        >Francis Golder | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
        </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Precaution checklist completed</Typography>
                <Typography variant="caption"
                //  sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}
                    >James Worthington | Ackrington Chambers</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>
    </Timeline>

    <Typography  variant="caption" sx={{mx: 2}}>
        30 Oct 23</Typography>
    <Timeline 
            sx={{p: 0, m: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  }
                }}>
        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Issuer signature completed</Typography>
                <Typography variant="caption" 
                    // sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}
                    >Barry White | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Supervisor signature completed</Typography>
                <Typography  variant="caption"
                // sx={{color: 'rgba(0, 0, 0, 0.6)'}}
                >Barry White | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Operator signature completed</Typography>
                <Typography variant="caption" 
                    // sx={{color: 'rgba(0, 0, 0, 0.6)'}}
                    >Barry White | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '37px' }} />                 
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Risk assessment compelted</Typography>
                <Typography variant="caption" 
                    // sx={{color: 'rgba(0, 0, 0, 0.6)'}}
                    >Barry White | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>
    </Timeline>

    <Typography variant="caption" sx={{mx: 2}}>
        13 Oct 23</Typography>
    <Timeline 
            sx={{p: 0, m: 0, mb: 10,
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  }
                }}>
        <TimelineItem sx={{mx: 2}}>
            <TimelineSeparator>
                <TimelineDot />              
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction="column" gap={0.5}>
                <Typography variant="body1">Permit created</Typography>
                <Typography variant="caption"
                    // sx={{color: 'rgba(0, 0, 0, 0.6)'}}
                    >Saqib Sabir | Balfour Beatty</Typography>
                </Stack>
                <ArrowForwardIosRoundedIcon sx={{fontSize: 14, m: '1rem'}} />
            </TimelineContent>
        </TimelineItem>

    </Timeline>
    </Stack>

    </Box>

</>
)
}