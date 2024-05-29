import React, { useState } from 'react';
import { TextField, Button, Typography, MenuItem, Box, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordMatch, setPasswordMatch] = useState(true);

    // const onSubmit = hpta => {
    //     console.log(hpta);
    // };
    function onSubmit(date) {
        console.log(date);
        let nombre_completo = date.nombre + date.apellido
        console.log(nombre_completo);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
                <Typography variant="h6">Formulario de registro</Typography>
                <TextField sx={{ margin: '10px 10px' }} label="Nombre" {...register("nombre", { required: true })}
                    fullWidth />
                {errors.nombre && <FormHelperText>Campo es requerido</FormHelperText>}
                <TextField sx={{ margin: '10px 10px' }} label="Apellido" {...register("apellido", { required: true })}
                    fullWidth />
                {errors.apellido && <FormHelperText>Campo requerido</FormHelperText>}
                <TextField
                    sx={{ margin: '10px 10px', width: '560px' }}
                    label="Numero de identificación"
                    type="number"
                    {...register("Numero de identificación", { required: true })}
                    fullWidth
                />
                {errors["Numero de identificación"] && <FormHelperText>Campo requerido</FormHelperText>}
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </Box>
        </form>
    )
        ;
}

export default Register;