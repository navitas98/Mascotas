// @deno-types="npm:@types/express@4"
import { GraphQLError, __Directive } from "graphql";
import { AnimalModel } from "../db/schema.ts";
import { Animal } from "../types.ts";


export const Mutation = {
 
    hello:()=>"funciona",
    nuevoAnimal:async(_:unknown,args:{nombre:string,raza:string}):Promise<Animal>=>{
        const {nombre, raza}=args;
        const animal=new AnimalModel({
            nombre,
            raza
        });
        await animal.save();
        return {
            id:animal._id.toString(),
            nombre:animal.nombre,
            raza:animal.raza
        }
    },
    eliminarAnimal:async(_:unknown,args:{id:string}):Promise<Animal>=>{
        const animal=await AnimalModel.findByIdAndDelete(args.id).exec();
        if(!animal)throw new GraphQLError("El id del animal no existe");
        return {
            id:animal._id.toString(),
            nombre:animal.nombre,
            raza:animal.raza
        }
    }
 }
 ;
 