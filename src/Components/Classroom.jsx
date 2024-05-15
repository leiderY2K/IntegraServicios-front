import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';

export default function Classroom({ data = {} }) {
    return (
      <Box sx={{ display: 'flex', width: "90%", justifyContent:"center", paddingBottom: 2, paddingTop: 2}}>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.id}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.capacity}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.movableChairs}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.staticChairs}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.movableTables}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.staticTables}</Box>
        <Box sx={{width:"12%", textAlign:"center"}}>{data.type.name}</Box>
      </Box>
    )
  }