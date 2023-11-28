import { GraphQLError } from "graphql";
import { MascotaModel } from "../bd/mascota.ts";
import { MascotaModelToMascota } from "../controllers/mascotaModelToMascota.ts";
import { Mascota } from "../type.ts";

export const Mutation={
    nuevaMascota:async(_:unknown,args:{nombre:string, raza:string}):Promise<Mascota>=>{
        const {nombre,raza}=args;
        const mascota ={
            nombre,
            raza
        }
        const nuevaMascota=await MascotaModel.create(mascota);
        return MascotaModelToMascota(nuevaMascota);
    },
    borrarMacota:async(_:unknown,args:{id:string}):Promise<Mascota>=>{
        const mascota=await MascotaModel.findByIdAndDelete(args.id);
        if(!mascota) throw new GraphQLError(`No hemos encontrado la mascota con la id ${args.id}`, {
            extensions: { code: "NOT_FOUND" },
          });
        return MascotaModelToMascota(mascota);
    },
    modificarMascota:async(_:unknown,args:{id:string, nombre:string, raza:string}):Promise<Mascota>=>{
        const {id, nombre, raza}=args;
        const mascota=await MascotaModel.findByIdAndUpdate(id,{nombre,raza},{new:true})
        if(!mascota) throw new GraphQLError(`No hemos encontrado la mascota con el id  ${id}`,{
            extensions: { code: "NOT_FOUND" },
          });
        return MascotaModelToMascota(mascota)
    }

}