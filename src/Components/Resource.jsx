import React from 'react';
import { 
  Box, Grid, Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Button
} from '@mui/material';

export default function Resource({ data = {} }) {

  const handleReserve = async () => {
    try {
      const response = await fetch('http://localhost:8080/reserve/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resourceId: data.id })
      });

      if (response.ok) {
        // Reserva exitosa
        console.log('Recurso reservado con éxito');
      } else {
        // Error en la reserva
        console.error('Error al reservar el recurso');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Box sx={{ width: '90%', margin: '20px auto' }}>
      <Paper elevation={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={9}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Descripción</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Días Disponibles</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Horario</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.description}</TableCell>
                    <TableCell>{data.avalaibleDays && data.avalaibleDays.join(", ")}</TableCell>
                    <TableCell>
                      {data.disponibility && data.disponibility.length > 0 ? (
                        `${data.disponibility[0].start} - ${data.disponibility[0].end}`
                      ) : (
                        "No disponible"
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleReserve}>
              Reservar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
