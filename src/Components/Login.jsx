import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';
import { useForm } from 'react-hook-form';



const Login = () => {

    function onSubmit(date) {
        console.log(date);
        let nombre_completo = date.nombre + date.apellido
        console.log(nombre_completo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
                <TextField
                    id="email"
                    label="Correo"
                    variant="standard"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    id="password"
                    label="Contraseña"
                    type="password"
                    variant="standard"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Recordar contraseña"
                    sx={{ color: 'text.primary' }}
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{ width: 200, margin: '20px auto' }}
                    type="submit"
                >
                    Ingresar
                </Button>
            </Box>
        </form>
    );
}
export default Login;
