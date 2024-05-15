import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';
import imgs from "../img/imagenes.jsx";

const Home = () => {
    return (
        <>
            <div>
                <Box sx={{ backgroundColor: '#cccccc'}}>
                    <AppBar position="static">
                        <Toolbar sx={{backgroundColor: '#D9D9D9'}}>
                            <TextField
                                id="outlined-basic"
                                label="Buscar recurso"
                                variant="outlined"
                                sx={{ ml: 2, backgroundColor: 'white' , margin: '20px auto', width: '50%'}}
                            />
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box sx={{ backgroundColor: "#D9D9D9", display: 'flex', flexDirection: 'row', gap: 10, padding: 5, justifyContent: 'center', alignItems: 'center'  }}>
                    <Card sx={{ maxWidth: 345, height: 420 }}>
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
                        <CardActions>
                            <Button size="small" to="/resources">Detalles</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, height: 420 }}>
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
                        <CardActions>
                            <Button size="small" to="/classrooms">Detalles</Button>
                        </CardActions>
                    </Card>
                </Box>
            </div>

        </>
    );
};

export default Home;