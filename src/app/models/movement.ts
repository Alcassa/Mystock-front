import { Product } from "./product";

export class Movement{
    id?:number;
    quantity:number|undefined;
    type:string|undefined;
    data:Date|undefined;
    product:Product|undefined
}