import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://admin:AdminProyectos@gestionproyectosmisiont.aayqb.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    )
    .then(() => {
            console.log('conexion exitosa');
    })
    .catch((e) => {
        console.error('Error conectando con la BD', e);
    });
};

export default conectarBD;