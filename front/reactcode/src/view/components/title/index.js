import { Box, Typography } from "@mui/material"

const DefaultTitle = ({text}) => {
    return <>
        <Box sx={{width:"100%", marginTop: "100px"}}>
            <Typography variant="h2">{text}</Typography>
        </Box>

    </>
}

export default DefaultTitle;