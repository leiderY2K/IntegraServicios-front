import { Card } from "@mui/material";
import imgs from "../img/imagenes.jsx";

const BluuCard = () => {
    return (
        <Card sx={{ maxWidth: 345, }}>
            <CardMedia
                component="img"
                height="140"
                image={imgs[1]}
                alt="Imagen de prueba"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Título de la tarjeta
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Descripción de la tarjeta de prueba.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Más información</Button>
            </CardActions>
        </Card>
    );

};

export default BluuCard;