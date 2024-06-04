import React from 'react';
import { TextField, Button, Typography, Box, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userType = {
      id: "1",
      name: "user"
    };

    const userData = {
      id: data.numero_identificacion,
      name: data.nombre,
      lastName: data.apellido,
      userType
    };

    try {
      const response = await axios.post('http://localhost:8080/user/', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log('User created successfully');
        // Manejar la respuesta exitosa
      } else {
        console.error('Failed to create user');
        // Manejar errores
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
        <Typography variant="h6">Formulario de registro</Typography>
        <TextField 
          sx={{ margin: '10px 10px' }} 
          label="Nombre" 
          {...register("nombre", { required: 'Campo es requerido' })}
          fullWidth 
        />
        {errors.nombre && <FormHelperText>{errors.nombre.message}</FormHelperText>}
        
        <TextField 
          sx={{ margin: '10px 10px' }} 
          label="Apellido" 
          {...register("apellido", { required: 'Campo requerido' })}
          fullWidth 
        />
        {errors.apellido && <FormHelperText>{errors.apellido.message}</FormHelperText>}
        
        <TextField
          sx={{ margin: '10px 10px', width: '560px' }}
          label="Numero de identificación"
          type="number"
          {...register("numero_identificacion", { required: 'Campo requerido' })}
          fullWidth
        />
        {errors.numero_identificacion && <FormHelperText>{errors.numero_identificacion.message}</FormHelperText>}
        
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Registrar
        </Button>
      </Box>
    </form>
  );
};

export default Register;

