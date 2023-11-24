// @deno-types="npm:@types/express@4"
export const typeDefs= `#graphql
type Animal{
    id:ID!
    nombre:String!
    raza:String!
}
type Query{
    hello:String!
    getAnimal(id:ID!):Animal!
    getAnimales:[Animal!]!
    
}
type Mutation {
    hello:String
    nuevoAnimal(nombre:String!,raza:String!):Animal!
    eliminarAnimal(id:ID!):Animal!
    #falta por hacer el modificar y el filtrar por raza. No me ha dado tiempo a hacerlo
}
`