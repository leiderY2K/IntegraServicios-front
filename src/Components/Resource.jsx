import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';

export default function Resource({ data = {} }) {
  return (
    <Box sx={{ display: 'flex', width: "90%", justifyContent:"center", paddingBottom: 2, paddingTop: 2}}>
       <Box sx={{width:"18%", textAlign:"center"}}>{data.id}</Box>
       <Box sx={{width:"18%", textAlign:"center"}}>{data.name}</Box>
       <Box sx={{width:"18%", textAlign:"center"}}>{data.description}</Box>
       <Box sx={{width:"18%", textAlign:"center"}}>{data.avalaibleDays.join(",")}</Box>
       <Box sx={{width:"18%", textAlign:"center"}}>{`${data.disponibility[0].start} - ${data.disponibility[0].end}`}</Box>
    </Box>
  )
}