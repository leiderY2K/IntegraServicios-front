import { Link, Outlet } from "react-router-dom";
import { Button, Typography, Box } from '@mui/material';

const Nav = () => {
    return (
        <nav>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '1500px', margin: '20px auto', width: '95%' }} >
                <Typography variant="h4">IntegraServicios</Typography>
                <Button variant="outlined" color="primary" size="large" sx={{ color: 'Black', borderColor: 'black', fontWeight: 'bold', '&:hover': { backgroundColor: 'blue', color: 'white' } }} component={Link} to="/login" spy="true" smooth="true">
                    Iniciar Sesión
                </Button>
            </Box>
        </nav>
    );
};
export default Nav;
