import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Dialog, DialogContent, DialogTitle,
    IconButton,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

function Noticia({titu, fecha, imageUrl, descripcion, opinion, avatarUrl, numLikes}) {
    const [isFavorited, setIsFavorited] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }

    const handleSubmitW = () => {
        console.log("Enviando por Whatsapp...")
    }

    const handleSubmitT = () => {
        console.log("Enviando por Telegram...")
    }

    const handleClickClose = () => {
        setOpen(false);
    }


    return(
    <>
    <div>
        <Card style={{maxWidth:600, margin:'1em auto'}}>
            <CardActionArea>
                <CardHeader
                avatar={<Avatar src={avatarUrl}></Avatar>}
                title={titu}
                subheader={fecha}/>

                <CardMedia
                component="img"
                alt={descripcion}
                height={194}
                image={imageUrl}>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2">{opinion}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={toggleFavorite}> {numLikes}
                        {isFavorited ? <FavoriteOutlinedIcon color={'error'} onClick={{numLikes}+1} /> : <FavoriteBorderOutlinedIcon/>}
                    </IconButton>
                    <IconButton disabled={!isFavorited} onClick={handleClickOpen}>
                        <ShareIcon></ShareIcon>
                    </IconButton>
                    <Dialog open={open}>
                        <DialogTitle>COMPARTIR</DialogTitle>
                        <DialogContent>¿A través de qué plataforma quieres compartir?</DialogContent>
                        <IconButton onClick={handleSubmitW} onClick={handleClickClose}>
                            <WhatsAppIcon></WhatsAppIcon>
                        </IconButton>
                        <IconButton onClick={handleSubmitT} onClick={handleClickClose}>
                            <TelegramIcon></TelegramIcon>
                        </IconButton>
                    </Dialog>

                </CardActions>
            </CardActionArea>
        </Card>
    </div>
    </>
)
}export default Noticia