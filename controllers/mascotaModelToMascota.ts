import { MascotaModelType } from "../bd/mascota.ts";
import { Mascota } from "../type.ts";

export const MascotaModelToMascota=(mascotaModel:MascotaModelType):Mascota=>{
    return{
        id:mascotaModel._id.toString(),
        nombre:mascotaModel.nombre,
        raza:mascotaModel.raza
    }
}