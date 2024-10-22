import './App.css'
import Noticia from "./components/Noticia";

function App() {
    const noticias = [{

        id: 1,
        titu: "Título 1",
        fecha: "22 de Octubre de 2024",
        imageSize: 194,
        imageUrl: "/sky.jpg",
        descripcion: "foto del cielo con nubes y el sol detrás",
        opinion: "Que guapas las nubes",
        avatarUrl: "/avatar01.png",
        numLikes: 1
    },
        {
            id: 2,
            titu: "Título 2",
            fecha: "22 de Octubre de 2024",
            imageSize: 194,
            imageUrl: "/sea.jpg",
            descripcion: "foto del mar tranquilo y el cielo",
            opinion: "No me gusta el mar",
            avatarUrl: "/avatar02.png",
            numLikes: 2
        },
        {
            id: 3,
            titu: "Título 3",
            fecha: "22 de Octubre de 2024",
            imageSize: 194,
            imageUrl: "/tux.jpg",
            descripcion: "I un corazón y la mascota de linux",
            opinion: "!Me encanta Linux¡",
            avatarUrl: "/avatar03.png",
            numLikes: 3
        },
        {
            id: 4,
            titu: "Título 4",
            fecha: "22 de Octubre de 2024",
            imageSize: 194,
            imageUrl: "/mario.jpg",
            descripcion: "Un Mario Bros del juego de Nintendo",
            opinion: "Me estoy regujando el Mario de DS y soy muy malo",
            avatarUrl: "/avatar04.png",
            numLikes: 4
        }
    ]

    return (
        <>
            {noticias.map((noticiasItem) =>
            <Noticia key={noticiasItem.id}
                     titu={noticiasItem.titu}
                     fecha={noticiasItem.fecha}
                     imageSize={noticiasItem.imageSize}
                     imageUrl={noticiasItem.imageUrl}
                     descripcion={noticiasItem.descripcion}
                     opinion={noticiasItem.opinion}
                     avatarUrl={noticiasItem.avatarUrl}
                        numLikes={noticiasItem.numLikes}
            />
            )}
        </>


    )
}

export default App
