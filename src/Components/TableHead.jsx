import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';
import {CLASSROOMS, RESOURCES, TABLE_HEAD} from '../model/TypeEnum'
export default function TableHead({data, type}){
  return(
      <Box sx={{display: 'flex', justifyContent:'center', width:"90%"}}>
        {data.map(value => <Box sx={{width: type===RESOURCES ? "18%":"12%", textAlign:"center"}} key={`head${value}`}>{value}</Box>)}
      </Box>
  )
}