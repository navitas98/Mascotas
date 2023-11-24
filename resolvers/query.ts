// @deno-types="npm:@types/express@4"
import { getAsyncIterableWithCancel } from "../../../AppData/Local/deno/npm/registry.npmjs.org/@graphql-tools/utils/9.2.1/typings/withCancel.d.ts";
import { AnimalModel, AnimalModelType } from "../db/schema.ts";
import { Animal } from "../types.ts";


export const Query = {
 
   hello:()=>"funciona",
   getAnimal:async(_:unknown,args:{id:string}):Promise<Animal>=>{
    try {
        const id=args.id
        const animal=await AnimalModel.findById(id).exec();
        if(!animal)throw new  Error("Animal no encontrado") 
        
        return {
          id:animal._id.toString(),
          nombre:animal.nombre,
          raza:animal.raza
        }
    } catch (error) {
        throw new Error(error)
    }
   },
   getAnimales:async():Promise<Animal[]>=>{
    try {
        const animales=await AnimalModel.find({}).exec();
        return animales.map((e)=>({
            id:e._id.toString(),
            nombre:e.nombre,
            raza:e.raza
        }))
    } catch (error) {
        throw new Error(error)
    }
   }
}
;
