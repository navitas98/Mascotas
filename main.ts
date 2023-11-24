import { typeDefs } from "./schema.ts";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import mongoose from "mongoose"
const resolvers={
  Query,
  Mutation
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await mongoose.connect("mongodb+srv://javier:javier@nebrija.awzbgfs.mongodb.net/?retryWrites=true&w=majority");
if(mongoose.connection){console.info("conectado")}
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);