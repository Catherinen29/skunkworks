import {Link as RouterLink} from 'react-router-dom'
import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import NewPermit from "./newPermit/NewPermit";
// import BB_bg from "../../BB_bg.png"


export default function Permits() {


return(
<Box>
    <Toolbar 
    // sx={{backgroundImage: `url(${BB_bg})`}}
    >
    <Typography sx={{color: '#ffffff', fontSize: 20}}>Permits</Typography>
    <Box>
        <Typography>NHS Southampton University Central Hospital</Typography>
        <Box
      sx={{
        width: '6rem',
        height: '1.8rem',
        bgcolor: '#4caf50',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckCircleIcon style={{ fill: 'white', m: '0.5rem' }}></CheckCircleIcon>
      <Typography
        sx={{
          color: 'white',
          fontSize: 14,
          alignSelf: 'center',
          m: '0.5rem',
        }}
      >
        Verified
      </Typography>
    </Box>
    </Box>
    </Toolbar>

    <Typography>Manage permits issued on this project</Typography> 

    <Button>MANAGE TEMPLATES</Button>
    <Button component={RouterLink} to="/newpermit">NEW PERMIT</Button>
</Box>
)
}