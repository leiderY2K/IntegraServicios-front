import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Card, CardContent, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const nombreCompleto = `${data.nombre} ${data.apellido}`;
    console.log(nombreCompleto);
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
                  {...register('email')}
                  id="email"
                  label="Correo"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  {...register('password')}
                  id="password"
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                  control={<Checkbox {...register('rememberPassword')} />}
                  label="Recordar contraseña"
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" size="large" type="submit">
                  Ingresar
                </Button>
                <RouterLink component={RouterLink} to="/" variant="body2" align="center">
                  Volver a la página de inicio
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