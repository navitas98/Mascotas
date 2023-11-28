//GQL schema
export const typeDefs=`#graphql
type Mascota{
    id:ID!
    nombre:String!
    raza:String!
}
type Query{
    mascotas:[Mascota!]!
    mascota(id:ID!):Mascota!
}
type Mutation{
    nuevaMascota(nombre:String!, raza:String!):Mascota!
    borrarMacota(id:ID!):Mascota!
    modificarMascota(id:ID,nombre:String!, raza:String!):Mascota!
}
`
