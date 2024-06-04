import React from 'react';
import {
  Box, Grid, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Button, Typography
} from '@mui/material';

export default function Classroom({ data = {} }) {

  const handleReserve = async () => {
    try {
      const response = await fetch('http://localhost:8080/reserve/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ classroomId: data.id }) // Envía el ID del classroom
      });

      if (response.ok) {
        console.log('Salón reservado con éxito');
      } else {
        console.error('Error al reservar el salón');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Box sx={{ width: '90%', margin: '20px auto' }}>
      <Paper elevation={5} sx={{ borderRadius: '8px' }}>
        <Grid container alignItems="center" sx={{ p: 2 }}>
          <Grid item xs={12} md={9}>
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Capacidad</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Sillas Móviles</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Sillas Estáticas</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Mesas Móviles</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Mesas Estáticas</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.capacity}</TableCell>
                    <TableCell>{data.movableChairs}</TableCell>
                    <TableCell>{data.staticChairs}</TableCell>
                    <TableCell>{data.movableTables}</TableCell>
                    <TableCell>{data.staticTables}</TableCell>
                    <TableCell>{data.type && data.type.name}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={3} sx={{ textAlign: 'center', mt: { xs: 2, md: 0 } }}>
            <Button variant="contained" color="primary" onClick={handleReserve} sx={{ borderRadius: '20px' }}>
              Reservar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
