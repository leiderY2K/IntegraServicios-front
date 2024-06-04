import React from 'react';
import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, TextField, Button } from '@mui/material'; // Importa el componente Button
import imgs from "../img/imagenes.jsx";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <Box sx={{ backgroundColor: '#cccccc' }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
              <TextField
                id="outlined-basic"
                label="Buscar recurso"
                variant="outlined"
                sx={{ ml: 2, backgroundColor: 'white', margin: '20px auto', width: '50%' }}
              />
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ backgroundColor: "#D9D9D9", display: 'flex', flexDirection: 'row', gap: 10, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
          {/* Tarjeta 1 */}
          <Link to="/resources" style={{ textDecoration: 'none' }}>
            <Card 
              sx={{ 
                maxWidth: 345, 
                height: 420, 
                transition: 'transform 0.2s', 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  backgroundColor: '#daf3ea', 
                  color: 'white',
                  '& .MuiCardActions-root': { 
                    '& .MuiButtonBase-root': {
                      backgroundColor: 'white', 
                      color: 'black', 
                    }
                  }
                }
              }}
            >
              <CardMedia
                component="img"
                width="100%"
                image={imgs[0]}
                alt="Imagen de prueba"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Recursos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recursos para hacer las clases más dinámicas
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" sx={{ color: 'black' }}>Detalles</Button>
              </CardActions>
            </Card>
          </Link>

          <Link to="/classrooms" style={{ textDecoration: 'none' }}>
            <Card 
              sx={{ 
                maxWidth: 345, 
                height: 420, 
                transition: 'transform 0.2s', 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  backgroundColor: '#daf3ea', 
                  color: 'white',
                  '& .MuiCardActions-root': { 
                    '& .MuiButtonBase-root': {
                      backgroundColor: 'white', 
                      color: 'black', 
                    }
                  }
                }
              }}
            >
              <CardMedia
                component="img"
                width="100%"
                image={imgs[2]}
                alt="Imagen de prueba"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Salones
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Espacios para impartir clases
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" sx={{ color: 'black' }}>Detalles</Button>
              </CardActions>
            </Card>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default Home;