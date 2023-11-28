import { GraphQLError } from "graphql";
import { MascotaModel } from "../bd/mascota.ts";
import { Mascota } from "../type.ts";
import { MascotaModelToMascota } from "../controllers/mascotaModelToMascota.ts";

export const Query={
    mascota:async(_:unknown,args:{id:string}):Promise<Mascota>=>{
        const mascota=await MascotaModel.findById(args.id);
        if(!mascota)throw new GraphQLError(`No hemos encontrado ninguna mascota con el siguiente id: ${args.id}`);
        return MascotaModelToMascota(mascota);
    },
    mascotas:async():Promise<Mascota[]>=>{
        const mascotas=await MascotaModel.find().exec();
        return mascotas.map((a)=>MascotaModelToMascota(a));
    }
}