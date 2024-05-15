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
  const [visibleResults, setVisibleResults] = useState([])
  const { getFromApi } = useFetchApi();

  useEffect(() => {
    getFromApi(table, textRef.current.value, setResults)
  }, [])

  useEffect(() => {
    console.log(results);
    setVisibleResults(results)
  }, [results])

  function filterResults(){
    console.log(textRef.current.value);
  }

  return (
    <>
      <div>
        <Box sx={{ backgroundColor: '#cccccc' }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: '#D9D9D9', display:'flex', justifyContent:'center' }}>
              <TextField
                id="outlined-basic"
                label= {`Filtrar`}
                variant="outlined"
                sx={{ ml: 2, backgroundColor: 'white', margin: '20px auto', width: '50%' }}
                inputRef={textRef}
              />
              <Button size='small' onClick={filterResults}>Buscar</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{backgroundColor: "#D9D9D9", display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          {visibleResults[0] && <TableHead data={Object.keys(visibleResults[0])} type={table}/>}
          {visibleResults?.map(result => table === CLASSROOMS ? <Classroom data={result} key={`classroom${result.id}`} /> : <Resource data={result} key={`resource${result.id}`}/>)}
        </Box>
      </div>
    </>)
}