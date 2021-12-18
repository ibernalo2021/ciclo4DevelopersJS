//aqui es como si estuviesemos haciendo los controladores

const resolvers = {
    Query: {
        Usuarios: async (parent, args) =>{
          const usuarios= [
            {
                nombre: 'Arley',
            },
            {
                nombre: 'Wilbert',
            },
            {
                nombre: 'Ivan',
            },
        ];
        return usuarios;
        }

    },
    // Mutation: {

    // }
};

export { resolvers };