import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import { isPropertyDeclaration } from 'typescript';
import { ObjectId } from 'mongoose';
import { ObjetiveModel } from './models/objective';


const main = async () => {
    await conectarBD();
    //CREAR PROYECTO CON OBJETIVOS DENTRO 

    // const objectivo = await ObjetiveModel.create({
    //    descripcion: 'Este es el objetivo especifico',
    //    tipo: Enum_TipoObjetivo.especifico,
    // });

    // // PARA REFERENCIAR OBJETIVOS DESDE PROYECTOS
    // ProjectModel.create({
    //     nombre: 'proyecto 3',
    //     presupuesto: 340,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date('2022/11/10'),
    //     lider: '61bab8ac7812672ce3545c8f',
    //     objetivos:[
    //         '61bbadcff13ad28997e83ab7',
    //         '61bbadfeb2c2fc706b1a428d',
    //     ]
    // }).then((p)=>{
    //     console.log('Proyecto creado ', p);
    // }).catch((e)=>{
    //     console.log('Error creando proyecto ', e);
    // });
  
    const proyecto = await ProjectModel.find({nombre: 'proyecto 3'})
    .populate('lider')
    .populate('objetivos');
     console.log('El proyecto 3 es: ' , JSON.stringify(proyecto));
  
    // // Borrar esto ya nos sirve (// // )
    // // const proyecto: any = await ProjectModel.find({nombre: 'proyecto 1'});
    // // console.log('El proyecto es: ' ,  proyecto);

    // // const lider = await UserModel.find({_id: proyecto[2].lider});
    // // console.log(' el lider del proyecto es: ', lider);
    
};

main();

// CREAR UN USUARIO
    // await UserModel.create({
    //     correo: "carmeng@unip.com.co",
    //     identificacion: '1444156416',
    //     nombre: 'carmensa',
    //     apellido: 'Granado 2',
    //     rol: Enum_Rol.lider,
    // })
    //     .then((u) => {
    //         console.log('usuario creado ', u);
    //     }).catch((e) => {
    //         console.log('error creado el usuario ', e);
    //     });

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