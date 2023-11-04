import Part1 from "./Part1";
import Part2 from "./Part2";
import { Box, Palette } from "@mui/material";

export default function NewPermit() {

    return(
    <Box 
    display='flex'
    alignItems='center'
    justifycontent='center'
    sx={{ bgcolor: '#eef5f5', flexDirection: 'column'}}>

    <h1>New Permit</h1>
        <Part1 />
        <Part2 />
        
    </Box>
    )
}