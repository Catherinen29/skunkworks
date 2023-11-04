import { Box, Paper } from "@mui/material"

export default function Part1() {

    return(
        <Paper component="section" sx={{ 
                width: '90%', /*This doesn't work */
                bgcolor: '#ffffff',
                borderRadius: 1 }}>
            <h3>Part 1 - Hot Works Permit Details</h3>
            <div>
                Permit issuer 
                {/* information icon */}
                <Box component="section"
                    sx={{bgcolor:'#f5f5f5',
                        width:'50%'
                }}>Current user 
                    <div>Verified?</div>
                </Box>
            </div>

            <div>
                Select type of organisation
                
            </div>

            
        </Paper>
    )
}