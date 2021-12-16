import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () => {
    await conectarBD();
    // CREAR UN USUARIO
    await UserModel.create({
        correo:"arri@uni.com",
        identificacion:'56416',
        nombre:'wilbert',
        apellido:'Rivas Granado',
        rol:Enum_Rol.administrador,
    })
    .then((u)=>{
        console.log('usuario creado ', u);
    }).catch((e)=>{
        console.log('error creado el usuario ', e);
    });

    //OBTENER LOS USUARIOS
    await UserModel.find({identificacion:'1111807577'}) //busqueda especifica
        .then((u)=>{
            console.log('usuario' , u);
        })
        .catch((e)=>{
            console.error('error obteniendo los usuarios', e);
        });
};

main();