import Part1 from "./Part1";
import Part2 from "./Part2";
import { Box, Button, Palette, Typography, AppBar, Toolbar, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import PermitIntro from "./PermitIntro";
import BB_bg from "../../BB_bg.png"

export default function NewPermit() {

return(
<>

    <Toolbar sx={{backgroundImage: `url(${BB_bg})`}}>
    <Button >
        {<CloseIcon sx={{color: '#ffffff'}} />} </Button>
    <Typography sx={{color: '#ffffff', fontSize: 20}}>New Permit</Typography>
    </Toolbar>

    <Box 
    display='flex'
    alignItems='center'
    justifycontent='center'
    sx={{ bgcolor: '#eef5f5', flexDirection: 'column'}}>

        <PermitIntro />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
        <Part7 />
    </Box>

    <Toolbar sx={{bgcolor:  '#ffffff', display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', height: 30, 
            justifyContent: 'center', alignItems: 'center'}}>
        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', mx: 1, fontSize: 12}}>Certchain secured</Typography>
        <Link  href="https://www.google.com" sx={{color: '#00a4a9', mx: 1, fontSize: 12}}>What is this?</Link>
        </Box>
        <Box>
        <Button variant="text" sx={{color: '#00a4a9', fontWeight: 'bold', mx: 1}}>CANCEL</Button>
        <Button variant="contained" sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>SAVE AS DRAFT{<SaveIcon sx={{ml: 1}} />}</Button>
        <Button variant="contained" sx={{bgcolor:  '#00a4a9', fontWeight: 'bold', mx: 1}}>CREATE PERMIT</Button>
        </Box>
        </Toolbar>

    </>
    )
}