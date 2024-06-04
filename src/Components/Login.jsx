import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'idUser': data.numero_identificacion
                }
            });

            if (response.ok) {
                const userData = await response.json();
                // El usuario existe y tenemos sus datos
                localStorage.setItem('userId', data.numero_identificacion);
                localStorage.setItem('userName', userData.name || userData.username || 'Usuario');
                setLoginError('');
                navigate('/');
            } else if (response.status === 404) {
                // El servidor devolvió 404, lo que significa que el usuario no existe
                setLoginError('Usuario no encontrado');
            } else {
                // Otro tipo de error del servidor
                setLoginError('Error al verificar el usuario');
            }
        } catch (error) {
            setLoginError('Error de conexión');
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <Card sx={{ maxWidth: 700, padding: 4 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom justifyContent="font-bold text-center">
                            Inicio de sesión
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <TextField
                                    {...register('numero_identificacion', { required: 'Campo requerido' })}
                                    id="numero_identificacion"
                                    label="Número de identificación"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: 2 }}
                                />
                                {errors.numero_identificacion && <FormHelperText error>{errors.numero_identificacion.message}</FormHelperText>}
                                {loginError && <FormHelperText error>{loginError}</FormHelperText>}
                                
                                <Button variant="contained" size="large" type="submit">
                                    Ingresar
                                </Button>
                                <RouterLink to="/" variant="body2" align="center">
                                    Volver a la página de inicio
                                </RouterLink>
                                <RouterLink to="/register" variant="body2" align="center">
                                    Registrate
                                </RouterLink>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Login;