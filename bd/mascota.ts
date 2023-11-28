import mongoose from "mongoose";
import { Mascota } from "../type.ts";
const Schema= mongoose.Schema;
const  MascotaSchema=new Schema({
    nombre:String,
    raza:String
})
export type MascotaModelType= mongoose.Document & Omit<Mascota,"id">
export const MascotaModel=mongoose.model<MascotaModelType>("Mascota",MascotaSchema)