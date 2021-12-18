// aqui hacemos una copia de nuestros esquemas 
//con esto le decimos a graphQl cuales son nuestros tipos para que el pueda hacer la documentacion
import{gql} from 'apollo-server-express';

const typeDefs = gql`
type Usuario{
    nombre: String!
    #el ! es para campos required
 }

#Definimos los tipos de los Querys de las mutaciones  
 type Query{
    #  el Usuarios es el mismo nombre del resolver y decimos que ese query devuelve un arreglo de usuarios del tipo arriba definido
     Usuarios:[Usuario]
 }
`;

export {typeDefs};