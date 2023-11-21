import { Box, Typography } from "@mui/material"


export default function NoTasksTag() {

return (
    <>
        <Box
        sx={{
            width: '6rem',
            height: '1.8rem',
            bgcolor: '#033f49',
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        > 
            <Typography
            sx={{
                color: '#a5babe',
                fontSize: 16,
                alignSelf: 'center',
                m: '0.5rem',
            }}
            >
            NO TASKS
            </Typography>
        </Box>

    </>
)
}