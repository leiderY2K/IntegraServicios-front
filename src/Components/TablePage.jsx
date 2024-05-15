import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import TableHead from './TableHead'
import Resource from './Resource'
import Classroom from './Classroom'
import useFetchApi from '../hooks/useFetchApi'
import { TABLE_HEAD, CLASSROOMS } from '../model/TypeEnum';

export default function TablePage({ table }) {
  const textRef = useRef()
  const [results, setResults] = useState([])
  const { getFromApi } = useFetchApi();

  useEffect(() => {
    getFromApi(table, textRef.current.value, setResults)
  }, [])

  useEffect(() => {
    console.log(results);
  }, [results])

  return (
    <>
      <div>
        <Box sx={{ backgroundColor: '#cccccc' }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
              <TextField
                id="outlined-basic"
                label= {`${table} filter`}
                variant="outlined"
                sx={{ ml: 2, backgroundColor: 'white', margin: '20px auto', width: '50%' }}
                ref={textRef}
              />
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{backgroundColor: "#D9D9D9", display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          {results[0] && <TableHead data={Object.keys(results[0])} type={table}/>}
          {results?.map(result => table === CLASSROOMS ? <Classroom data={result} key={`classroom${result.id}`} /> : <Resource data={result} key={`resource${result.id}`}/>)}
        </Box>
      </div>
    </>)
}