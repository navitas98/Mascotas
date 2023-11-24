import mongosose from "mongoose"
import { Animal } from "../types.ts";

const Schema=mongosose.Schema;
const AnimalSchema=new Schema({
    nombre:{type:String,requiered:true},
    raza:{type:String, requiered:true}
})
export type AnimalModelType=mongosose.Document&
Omit<Animal,"id">
export const AnimalModel=mongosose.model<AnimalModelType>(
    "Animal",
    AnimalSchema
)