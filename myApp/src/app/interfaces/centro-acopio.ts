export interface CentroAcopio {
    id?:string;
    name: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    createdBy: string;

}

export interface Centro_Acopio{
    Categorias: Array<CentroAcopio>
 }

