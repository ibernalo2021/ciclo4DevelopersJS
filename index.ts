import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () => {
    await conectarBD();
    // CREAR UN USUARIO
    await UserModel.create({
        correo: "carmeng@fdgd.com.co",
        identificacion: '144156416',
        nombre: 'carmensa',
        apellido: 'Granado 2',
        rol: Enum_Rol.lider,
    })
        .then((u) => {
            console.log('usuario creado ', u);
        }).catch((e) => {
            console.log('error creado el usuario ', e);
        });

    //OBTENER LOS USUARIOS
    // await UserModel.find() //busqueda especifica
    //     .then((u)=>{
    //         console.log('usuario' , u);
    //     })
    //     .catch((e)=>{
    //         console.error('error obteniendo los usuarios', e);
    //     });

    //OBTENER UN USUARIO
    // await UserModel.find({identificacion:'1111807577'}) //busqueda especifica
    // .then((u)=>{
    //     console.log('usuario' , u);
    // })
    // .catch((e)=>{
    //     console.error('error obteniendo los usuarios', e);
    // });

    //OBTENER UN USUARIO
    // await UserModel.findOne({identificacion:'111807577'}) //busqueda especifica
    // .then((u)=>{
    //     console.log('usuario encontrado: ' , u);
    // })
    // .catch((e)=>{
    //     console.error('error al buscar usuario: ', e);
    // });

    // ACTUALIZAR UN USARIO
    // await UserModel.findOneAndUpdate(
    //     { identificacion: '56416' },
    //     {
    //         nombre: 'Wilbert',
    //         apellido: 'Granado Rivas',
    //     }
    // ).then((u)=>{
    //     console.log('Usuario Actualizado: ', u);
    // }).catch((e)=>{
    //     console.log('Error al actualizar usuario ' ,  e)
    // });


    //ELIMINAR UN USUARIO
    // await UserModel.findOneAndDelete({
    //     correo: 'arri@uni.com'
    // }).then((u) => {
    //     console.log('usuario eliminado: ', u);
    // }).catch((e) => {
    //     console.error('Error al eliminar usuario ', e);
    // });
};

main();