import Part1 from "./Part1";
import Part2 from "./Part2";
import { Box, Button, Palette, Typography, AppBar, Toolbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";
import Part7 from "./Part7";
import PermitIntro from "./PermitIntro";
import { Close } from "@mui/icons-material";
// import Image from "src/resources/AA050432-1DE6-4D57-A882-0AE636B7EA26.png"

export default function NewPermit() {

    return(
<>

        <Toolbar sx={{bgcolor:  '#04535f'}}>
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
    </>
    )
}