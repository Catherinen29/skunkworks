import { Box, Typography } from "@mui/material"


export default function NoTasksTag() {

return (
    <>
        <Box
        sx={{
            width: '7rem',
            height: '1.9rem',
            bgcolor: '#033f49',
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
        }}
        > 
            <Typography
            sx={{
                color: '#a5babe',
                fontSize: 18,
                alignSelf: 'center',
                // m: '0.5rem',
            }}
            >
            NO TASKS
            </Typography>
        </Box>

    </>
)
}